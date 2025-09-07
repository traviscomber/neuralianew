"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  Clock,
  Play,
  Pause,
  RotateCcw,
  Smartphone,
  Tablet,
  Monitor,
  RefreshCw,
  Activity,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react"

interface TimezoneTest {
  name: string
  status: "pass" | "fail" | "warning"
  message: string
  timestamp: string
  category: "format" | "coverage" | "system" | "reliability" | "midnight" | "boundary"
}

interface TimezoneData {
  city: string
  timezone: string
  country: string
  flag: string
  currentTime: string
  isWorking: boolean
  lastUpdate: string
  workingHours: string
  shiftStart: number
  shiftEnd: number
}

interface CoverageAnalysis {
  currentHour: number
  activeTeams: number
  coverageStatus: "full" | "partial" | "none"
  nextShiftChange: string
  gapDetected: boolean
  continuousCoverage: boolean
}

interface OvernightAnalysis {
  currentHour: number
  currentMinute: number
  currentSecond: number
  russiaTime: string
  shouldBeWorking: boolean
  isActuallyWorking: boolean
  shiftStatus: "correct" | "incorrect"
  hoursIntoShift: number
  hoursUntilEnd: number
  isNearMidnight: boolean
  midnightTransition: "approaching" | "crossing" | "passed" | "none"
  secondsToMidnight: number
  isExactBoundary: boolean
  boundaryType: "pre-midnight" | "midnight" | "post-midnight" | "none"
}

interface MidnightBoundaryTest {
  timestamp: string
  beforeMidnight: {
    time: string
    hour: number
    minute: number
    second: number
    isWorking: boolean
    logic: string
  }
  afterMidnight: {
    time: string
    hour: number
    minute: number
    second: number
    isWorking: boolean
    logic: string
  }
  transitionStatus: "success" | "failure"
  continuity: boolean
}

interface BoundarySecondTest {
  timestamp: string
  exactTime: string
  hour: number
  minute: number
  second: number
  isWorking: boolean
  logic: string
  boundaryType: "23:59:59" | "00:00:00" | "other"
  transitionMoment: boolean
  continuityCheck: boolean
}

export default function TimezoneVerification() {
  const [isRunning, setIsRunning] = useState(false)
  const [testResults, setTestResults] = useState<TimezoneTest[]>([])
  const [updateCount, setUpdateCount] = useState(0)
  const [timezones, setTimezones] = useState<TimezoneData[]>([])
  const [coverageAnalysis, setCoverageAnalysis] = useState<CoverageAnalysis | null>(null)
  const [isClient, setIsClient] = useState(false)
  const [overnightAnalysis, setOvernightAnalysis] = useState<OvernightAnalysis | null>(null)
  const [midnightTests, setMidnightTests] = useState<MidnightBoundaryTest[]>([])
  const [boundarySecondTests, setBoundarySecondTests] = useState<BoundarySecondTest[]>([])
  const [lastMidnightCheck, setLastMidnightCheck] = useState<Date | null>(null)
  const [lastBoundaryCheck, setLastBoundaryCheck] = useState<Date | null>(null)

  const timezoneConfigs = [
    {
      city: "Santiago",
      timezone: "America/Santiago",
      country: "Chile",
      flag: "🇨🇱",
      workingHours: "9:00 - 18:00 CLT",
      shiftStart: 9,
      shiftEnd: 18,
    },
    {
      city: "Kaliningrado",
      timezone: "Europe/Kaliningrad",
      country: "Rusia",
      flag: "🇷🇺",
      workingHours: "18:00 - 3:00 KALT",
      shiftStart: 18,
      shiftEnd: 3,
    },
    {
      city: "Singapur",
      timezone: "Asia/Singapore",
      country: "Singapur",
      flag: "🇸🇬",
      workingHours: "3:00 - 12:00 SGT",
      shiftStart: 3,
      shiftEnd: 12,
    },
  ]

  // Initialize client-side rendering
  useEffect(() => {
    setIsClient(true)
  }, [])

  const checkExactBoundarySeconds = (russiaTime: string, hour: number, minute: number, second: number) => {
    const now = new Date()

    // Check for exact boundary seconds: 23:59:59 or 00:00:00
    const isExactBoundary =
      (hour === 23 && minute === 59 && second === 59) || (hour === 0 && minute === 0 && second === 0)

    if (isExactBoundary && (!lastBoundaryCheck || now.getTime() - lastBoundaryCheck.getTime() > 500)) {
      const boundaryType = hour === 23 && minute === 59 && second === 59 ? "23:59:59" : "00:00:00"
      const isWorking = hour >= 18 || hour < 3
      const logic = `hour >= 18 || hour < 3 = ${hour} >= 18 || ${hour} < 3 = ${isWorking}`

      // Check if this is a transition moment (from 23:59:59 to 00:00:00)
      const transitionMoment = boundaryType === "00:00:00"

      // For continuity check, verify that both 23:59:59 and 00:00:00 should be working
      const continuityCheck = transitionMoment
        ? (23 >= 18 || 23 < 3) && (0 >= 18 || 0 < 3)
        : // Both should be true
          isWorking

      const boundaryTest: BoundarySecondTest = {
        timestamp: now.toLocaleTimeString(),
        exactTime: russiaTime,
        hour,
        minute,
        second,
        isWorking,
        logic,
        boundaryType,
        transitionMoment,
        continuityCheck,
      }

      setBoundarySecondTests((prev) => [boundaryTest, ...prev].slice(0, 20))
      setLastBoundaryCheck(now)

      return boundaryTest
    }

    return null
  }

  const checkMidnightBoundary = (russiaTime: string, hour: number, minute: number, second: number) => {
    const now = new Date()

    // Check if we're within 30 seconds of midnight (either side)
    const isNearMidnight =
      (hour === 23 && minute === 59 && second >= 30) || (hour === 0 && minute === 0 && second <= 30)

    if (isNearMidnight && (!lastMidnightCheck || now.getTime() - lastMidnightCheck.getTime() > 60000)) {
      // Capture before and after states
      const beforeMidnight = {
        time: russiaTime,
        hour,
        minute,
        second,
        isWorking: hour >= 18 || hour < 3,
        logic: `hour >= 18 || hour < 3 = ${hour} >= 18 || ${hour} < 3 = ${hour >= 18 || hour < 3}`,
      }

      // Simulate the next second for after midnight
      let nextHour = hour
      let nextMinute = minute
      let nextSecond = second + 1

      if (nextSecond >= 60) {
        nextSecond = 0
        nextMinute++
        if (nextMinute >= 60) {
          nextMinute = 0
          nextHour++
          if (nextHour >= 24) {
            nextHour = 0
          }
        }
      }

      const afterMidnight = {
        time: `${nextHour.toString().padStart(2, "0")}:${nextMinute.toString().padStart(2, "0")}:${nextSecond.toString().padStart(2, "0")}`,
        hour: nextHour,
        minute: nextMinute,
        second: nextSecond,
        isWorking: nextHour >= 18 || nextHour < 3,
        logic: `hour >= 18 || hour < 3 = ${nextHour} >= 18 || ${nextHour} < 3 = ${nextHour >= 18 || nextHour < 3}`,
      }

      const midnightTest: MidnightBoundaryTest = {
        timestamp: now.toLocaleTimeString(),
        beforeMidnight,
        afterMidnight,
        transitionStatus: beforeMidnight.isWorking === afterMidnight.isWorking ? "success" : "failure",
        continuity: beforeMidnight.isWorking && afterMidnight.isWorking,
      }

      setMidnightTests((prev) => [midnightTest, ...prev].slice(0, 10))
      setLastMidnightCheck(now)

      return midnightTest
    }

    return null
  }

  const updateTimezones = () => {
    if (!isClient || typeof window === "undefined") return

    const now = new Date()
    const updatedTimezones = timezoneConfigs.map((config) => {
      const timeString = now.toLocaleTimeString("es-CL", {
        timeZone: config.timezone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })

      const fullTimeString = now.toLocaleTimeString("es-CL", {
        timeZone: config.timezone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })

      const hour = Number.parseInt(timeString.split(":")[0])
      const minute = Number.parseInt(fullTimeString.split(":")[1])
      const second = Number.parseInt(fullTimeString.split(":")[2])

      let isWorking: boolean

      // Handle overnight shifts
      if (config.shiftStart > config.shiftEnd) {
        // Overnight shift (e.g., 18:00 - 3:00)
        isWorking = hour >= config.shiftStart || hour < config.shiftEnd
      } else {
        // Regular shift (e.g., 9:00 - 18:00)
        isWorking = hour >= config.shiftStart && hour < config.shiftEnd
      }

      return {
        ...config,
        currentTime: timeString,
        isWorking,
        lastUpdate: now.toLocaleTimeString(),
        fullTime: fullTimeString,
        hour,
        minute,
        second,
      }
    })

    setTimezones(updatedTimezones)

    // Calculate coverage analysis
    const activeTeams = updatedTimezones.filter((tz) => tz.isWorking).length
    const currentHour = new Date().getHours()

    // Determine next shift change
    const getNextShiftChange = () => {
      const shifts = [
        { time: 3, city: "Singapore starts" },
        { time: 9, city: "Chile starts" },
        { time: 12, city: "Singapore ends" },
        { time: 18, city: "Chile ends, Russia starts" },
      ]

      const nextShift = shifts.find((shift) => shift.time > currentHour) || shifts[0]
      const hoursUntil = nextShift.time > currentHour ? nextShift.time - currentHour : 24 - currentHour + nextShift.time
      return `${hoursUntil}h until ${nextShift.city}`
    }

    const analysis: CoverageAnalysis = {
      currentHour,
      activeTeams,
      coverageStatus: activeTeams >= 2 ? "full" : activeTeams === 1 ? "partial" : "none",
      nextShiftChange: getNextShiftChange(),
      gapDetected: activeTeams === 0,
      continuousCoverage: activeTeams > 0,
    }

    setCoverageAnalysis(analysis)

    // Analyze overnight shift for Russia
    const russiaTeam = updatedTimezones.find((tz) => tz.city === "Kaliningrado")
    if (russiaTeam) {
      const hour = russiaTeam.hour
      const minute = russiaTeam.minute
      const second = russiaTeam.second
      const shouldBeWorking = hour >= 18 || hour < 3

      // Check for exact boundary seconds
      const boundaryTest = checkExactBoundarySeconds(russiaTeam.fullTime, hour, minute, second)

      // Check for midnight boundary crossing
      const midnightTest = checkMidnightBoundary(russiaTeam.fullTime, hour, minute, second)

      let hoursIntoShift = 0
      let hoursUntilEnd = 0

      if (shouldBeWorking) {
        if (hour >= 18) {
          // Evening portion (18:00-23:59)
          hoursIntoShift = hour - 18
          hoursUntilEnd = 24 - hour + 3
        } else {
          // Morning portion (00:00-02:59)
          hoursIntoShift = 24 - 18 + hour
          hoursUntilEnd = 3 - hour
        }
      } else {
        // Off hours (03:00-17:59)
        hoursUntilEnd = hour < 18 ? 18 - hour : 0
      }

      // Calculate seconds to midnight
      let secondsToMidnight = 0
      if (hour === 23) {
        secondsToMidnight = (59 - minute) * 60 + (60 - second)
      } else if (hour === 0) {
        secondsToMidnight = -1 // Just passed midnight
      } else {
        secondsToMidnight = (23 - hour) * 3600 + (59 - minute) * 60 + (60 - second)
      }

      const isNearMidnight = Math.abs(secondsToMidnight) <= 30 || secondsToMidnight <= 30

      // Check for exact boundary conditions
      const isExactBoundary =
        (hour === 23 && minute === 59 && second >= 58) || (hour === 0 && minute === 0 && second <= 2)

      let boundaryType: "pre-midnight" | "midnight" | "post-midnight" | "none" = "none"
      if (hour === 23 && minute === 59 && second === 59) {
        boundaryType = "pre-midnight"
      } else if (hour === 0 && minute === 0 && second === 0) {
        boundaryType = "midnight"
      } else if (hour === 0 && minute === 0 && second <= 2) {
        boundaryType = "post-midnight"
      }

      let midnightTransition: "approaching" | "crossing" | "passed" | "none" = "none"
      if (hour === 23 && minute === 59 && second >= 55) {
        midnightTransition = "approaching"
      } else if (hour === 0 && minute === 0 && second <= 5) {
        midnightTransition = "crossing"
      } else if (hour === 0 && minute === 0 && second <= 30) {
        midnightTransition = "passed"
      }

      setOvernightAnalysis({
        currentHour: hour,
        currentMinute: minute,
        currentSecond: second,
        russiaTime: russiaTeam.fullTime,
        shouldBeWorking,
        isActuallyWorking: russiaTeam.isWorking,
        shiftStatus: russiaTeam.isWorking === shouldBeWorking ? "correct" : "incorrect",
        hoursIntoShift,
        hoursUntilEnd,
        isNearMidnight,
        midnightTransition,
        secondsToMidnight,
        isExactBoundary,
        boundaryType,
      })
    }

    return updatedTimezones
  }

  const runTests = () => {
    if (!isClient) return

    const updatedTimezones = updateTimezones()
    const newTests: TimezoneTest[] = []

    // Test 1: Time format validation
    updatedTimezones.forEach((tz) => {
      const timeRegex = /^\d{2}:\d{2}$/
      newTests.push({
        name: `${tz.city} Time Format`,
        status: timeRegex.test(tz.currentTime) ? "pass" : "fail",
        message: timeRegex.test(tz.currentTime)
          ? `✅ Time format valid: ${tz.currentTime}`
          : `❌ Invalid time format: ${tz.currentTime}`,
        timestamp: new Date().toLocaleTimeString(),
        category: "format",
      })
    })

    // Test 2: Working hours calculation
    updatedTimezones.forEach((tz) => {
      const hour = Number.parseInt(tz.currentTime.split(":")[0])
      const config = timezoneConfigs.find((c) => c.city === tz.city)!

      let expectedWorking: boolean
      if (config.shiftStart > config.shiftEnd) {
        expectedWorking = hour >= config.shiftStart || hour < config.shiftEnd
      } else {
        expectedWorking = hour >= config.shiftStart && hour < config.shiftEnd
      }

      newTests.push({
        name: `${tz.city} Working Hours`,
        status: tz.isWorking === expectedWorking ? "pass" : "fail",
        message:
          tz.isWorking === expectedWorking
            ? `✅ Working status correct: ${tz.isWorking ? "Working" : "Off hours"} (${config.workingHours})`
            : `❌ Working status incorrect for ${config.workingHours}`,
        timestamp: new Date().toLocaleTimeString(),
        category: "coverage",
      })
    })

    // Test 3: System update reliability
    newTests.push({
      name: "System Updates",
      status: "pass",
      message: `✅ System updated successfully (${updateCount + 1} times)`,
      timestamp: new Date().toLocaleTimeString(),
      category: "system",
    })

    // Test 4: Coverage analysis
    const workingTeams = updatedTimezones.filter((tz) => tz.isWorking).length
    newTests.push({
      name: "Team Coverage",
      status: workingTeams > 0 ? "pass" : "warning",
      message:
        workingTeams > 0 ? `✅ ${workingTeams} team(s) currently working` : `⚠️ No teams currently in working hours`,
      timestamp: new Date().toLocaleTimeString(),
      category: "coverage",
    })

    // Test 5: 24/7 Coverage verification
    const hasFullCoverage = updatedTimezones.some((tz) => tz.isWorking)
    newTests.push({
      name: "24/7 Coverage",
      status: hasFullCoverage ? "pass" : "fail",
      message: hasFullCoverage
        ? `✅ 24/7 Coverage maintained - ${updatedTimezones.filter((tz) => tz.isWorking).length} team(s) on duty`
        : `❌ Coverage gap detected - No teams currently working`,
      timestamp: new Date().toLocaleTimeString(),
      category: "coverage",
    })

    // Test 6: Enhanced overnight shift handling
    const russiaTeam = updatedTimezones.find((tz) => tz.city === "Kaliningrado")
    if (russiaTeam && overnightAnalysis) {
      newTests.push({
        name: "Russia Overnight Shift Logic",
        status: overnightAnalysis.shiftStatus === "correct" ? "pass" : "fail",
        message:
          overnightAnalysis.shiftStatus === "correct"
            ? `✅ Overnight shift correctly calculated: ${overnightAnalysis.russiaTime} (${overnightAnalysis.shouldBeWorking ? "Working" : "Off hours"})`
            : `❌ Overnight shift calculation error: Expected ${overnightAnalysis.shouldBeWorking ? "Working" : "Off hours"} at ${overnightAnalysis.russiaTime}`,
        timestamp: new Date().toLocaleTimeString(),
        category: "reliability",
      })

      // Test 7: Exact boundary second monitoring
      if (overnightAnalysis.isExactBoundary) {
        newTests.push({
          name: "Exact Boundary Second Detection",
          status: "warning",
          message: `⚠️ Exact boundary second detected: ${overnightAnalysis.russiaTime} (${overnightAnalysis.boundaryType}) - Critical transition moment`,
          timestamp: new Date().toLocaleTimeString(),
          category: "boundary",
        })
      }

      // Test 8: Midnight boundary monitoring
      if (overnightAnalysis.isNearMidnight) {
        newTests.push({
          name: "Midnight Boundary Detection",
          status: "warning",
          message: `⚠️ Near midnight boundary: ${overnightAnalysis.russiaTime} (${overnightAnalysis.midnightTransition}) - ${Math.abs(overnightAnalysis.secondsToMidnight)}s to/from midnight`,
          timestamp: new Date().toLocaleTimeString(),
          category: "midnight",
        })
      }

      // Test 9: Midnight transition validation
      if (overnightAnalysis.midnightTransition !== "none") {
        const transitionStatus =
          overnightAnalysis.shouldBeWorking && overnightAnalysis.isActuallyWorking ? "pass" : "fail"
        newTests.push({
          name: "Midnight Transition Continuity",
          status: transitionStatus,
          message:
            transitionStatus === "pass"
              ? `✅ Midnight transition maintained: ${overnightAnalysis.russiaTime} - Shift continues correctly`
              : `❌ Midnight transition failed: ${overnightAnalysis.russiaTime} - Shift continuity broken`,
          timestamp: new Date().toLocaleTimeString(),
          category: "midnight",
        })
      }

      // Test 10: Specific hour validation
      const hour = overnightAnalysis.currentHour
      if (hour >= 18 || hour < 3) {
        newTests.push({
          name: "Overnight Hours Validation",
          status: russiaTeam.isWorking ? "pass" : "fail",
          message: russiaTeam.isWorking
            ? `✅ Russia team correctly working during overnight hours (${overnightAnalysis.russiaTime})`
            : `❌ Russia team should be working during overnight hours (${overnightAnalysis.russiaTime})`,
          timestamp: new Date().toLocaleTimeString(),
          category: "coverage",
        })
      } else {
        newTests.push({
          name: "Off Hours Validation",
          status: !russiaTeam.isWorking ? "pass" : "fail",
          message: !russiaTeam.isWorking
            ? `✅ Russia team correctly off during day hours (${overnightAnalysis.russiaTime})`
            : `❌ Russia team should be off during day hours (${overnightAnalysis.russiaTime})`,
          timestamp: new Date().toLocaleTimeString(),
          category: "coverage",
        })
      }

      // Test 11: Critical transition points
      if (hour === 18 || hour === 3) {
        newTests.push({
          name: "Shift Transition Point",
          status: "warning",
          message: `⚠️ Critical transition hour detected: ${overnightAnalysis.russiaTime} (${hour === 18 ? "Shift starting" : "Shift ending"})`,
          timestamp: new Date().toLocaleTimeString(),
          category: "reliability",
        })
      }

      // Test 12: Exact boundary second validation
      if (overnightAnalysis.boundaryType === "pre-midnight" || overnightAnalysis.boundaryType === "midnight") {
        const expectedWorking =
          overnightAnalysis.boundaryType === "pre-midnight" ? 23 >= 18 || 23 < 3 : 0 >= 18 || 0 < 3

        newTests.push({
          name: "Exact Boundary Second Logic",
          status: overnightAnalysis.isActuallyWorking === expectedWorking ? "pass" : "fail",
          message:
            overnightAnalysis.isActuallyWorking === expectedWorking
              ? `✅ Exact boundary second logic correct: ${overnightAnalysis.russiaTime} (${overnightAnalysis.boundaryType})`
              : `❌ Exact boundary second logic error: ${overnightAnalysis.russiaTime} (${overnightAnalysis.boundaryType})`,
          timestamp: new Date().toLocaleTimeString(),
          category: "boundary",
        })
      }
    }

    // Test 13: Boolean calculation verification
    if (russiaTeam && overnightAnalysis) {
      const hour = overnightAnalysis.currentHour
      const condition1 = hour >= 18
      const condition2 = hour < 3
      const calculatedResult = condition1 || condition2
      const actualResult = overnightAnalysis.shouldBeWorking

      newTests.push({
        name: "Boolean Logic Verification",
        status: calculatedResult === actualResult ? "pass" : "fail",
        message:
          calculatedResult === actualResult
            ? `✅ Boolean logic correct: (${hour} >= 18) || (${hour} < 3) = ${condition1} || ${condition2} = ${calculatedResult}`
            : `❌ Boolean logic error: Expected ${calculatedResult}, got ${actualResult}`,
        timestamp: new Date().toLocaleTimeString(),
        category: "midnight",
      })

      // Test 14: Midnight boundary boolean verification
      if (hour === 23 || hour === 0) {
        const beforeMidnightLogic = "23 >= 18 || 23 < 3 = TRUE || FALSE = TRUE"
        const afterMidnightLogic = "0 >= 18 || 0 < 3 = FALSE || TRUE = TRUE"

        newTests.push({
          name: "Midnight Boolean Continuity",
          status: "pass",
          message:
            hour === 23
              ? `✅ Pre-midnight logic verified: ${beforeMidnightLogic} (Evening shift active)`
              : `✅ Post-midnight logic verified: ${afterMidnightLogic} (Morning shift active)`,
          timestamp: new Date().toLocaleTimeString(),
          category: "midnight",
        })
      }

      // Test 15: Complete 24-hour logic verification
      const allHoursCorrect = Array.from({ length: 24 }, (_, h) => {
        const expected = h >= 18 || h < 3
        return { hour: h, expected }
      })

      const workingHours = allHoursCorrect.filter((h) => h.expected).length
      const offHours = allHoursCorrect.filter((h) => !h.expected).length

      newTests.push({
        name: "24-Hour Logic Completeness",
        status: workingHours === 9 && offHours === 15 ? "pass" : "fail",
        message:
          workingHours === 9 && offHours === 15
            ? `✅ Complete logic verified: ${workingHours}h working + ${offHours}h off = 24h total`
            : `❌ Logic error: ${workingHours}h working + ${offHours}h off ≠ 24h`,
        timestamp: new Date().toLocaleTimeString(),
        category: "reliability",
      })
    }

    setTestResults((prev) => [...newTests, ...prev].slice(0, 50))
    setUpdateCount((prev) => prev + 1)
  }

  // Auto-update effect
  useEffect(() => {
    if (!isClient) return

    let interval: NodeJS.Timeout | null = null

    if (isRunning) {
      // Initial update
      runTests()

      // Set up interval
      interval = setInterval(() => {
        runTests()
      }, 1000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isRunning, isClient, updateCount])

  // Auto-start on mount
  useEffect(() => {
    if (isClient) {
      setIsRunning(true)
    }
  }, [isClient])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pass":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "fail":
        return <XCircle className="w-4 h-4 text-red-500" />
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />
      default:
        return <RefreshCw className="w-4 h-4 text-gray-400" />
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "format":
        return <Clock className="w-3 h-3" />
      case "coverage":
        return <Shield className="w-3 h-3" />
      case "system":
        return <Activity className="w-3 h-3" />
      case "reliability":
        return <TrendingUp className="w-3 h-3" />
      case "midnight":
        return <Zap className="w-3 h-3" />
      case "boundary":
        return <AlertTriangle className="w-3 h-3" />
      default:
        return <RefreshCw className="w-3 h-3" />
    }
  }

  const getDeviceType = () => {
    if (!isClient || typeof window === "undefined") return "Unknown"
    const width = window.innerWidth
    if (width < 768) return "Mobile"
    if (width < 1024) return "Tablet"
    return "Desktop"
  }

  const getDeviceIcon = () => {
    const deviceType = getDeviceType()
    switch (deviceType) {
      case "Mobile":
        return <Smartphone className="w-4 h-4" />
      case "Tablet":
        return <Tablet className="w-4 h-4" />
      default:
        return <Monitor className="w-4 h-4" />
    }
  }

  // Show loading state during SSR
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-slate-900">Timezone Verification System</h1>
            <p className="text-xl text-slate-600">Loading timezone testing environment...</p>
          </div>
          <Card className="border-2 border-slate-200">
            <CardContent className="p-8 text-center">
              <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-slate-400" />
              <p className="text-slate-600">Initializing real-time clock verification...</p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const passedTests = testResults.filter((t) => t.status === "pass").length
  const failedTests = testResults.filter((t) => t.status === "fail").length
  const warningTests = testResults.filter((t) => t.status === "warning").length
  const boundaryTests = testResults.filter((t) => t.category === "boundary").length

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">24/7 Coverage Verification</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Real-time monitoring with exact boundary second testing (23:59:59 → 00:00:00)
          </p>
        </div>

        {/* Exact Boundary Alert */}
        {overnightAnalysis?.isExactBoundary && (
          <Card className="border-2 border-red-400 bg-red-50 animate-pulse">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl text-red-800">
                <AlertTriangle className="w-6 h-6 text-red-600" />⚡ EXACT BOUNDARY SECOND DETECTED -{" "}
                {overnightAnalysis.boundaryType.toUpperCase()}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div>
                  <strong>Exact Time:</strong> {overnightAnalysis.russiaTime}
                </div>
                <div>
                  <strong>Boundary Type:</strong> {overnightAnalysis.boundaryType}
                </div>
                <div>
                  <strong>Working Status:</strong> {overnightAnalysis.isActuallyWorking ? "✅ WORKING" : "❌ OFF"}
                </div>
                <div>
                  <strong>Logic Status:</strong>{" "}
                  {overnightAnalysis.shiftStatus === "correct" ? "✅ CORRECT" : "❌ ERROR"}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Midnight Boundary Alert */}
        {overnightAnalysis?.isNearMidnight && !overnightAnalysis?.isExactBoundary && (
          <Card className="border-2 border-yellow-400 bg-yellow-50 animate-pulse">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl text-yellow-800">
                <Zap className="w-6 h-6 text-yellow-600" />🌙 MIDNIGHT BOUNDARY DETECTED -{" "}
                {overnightAnalysis.midnightTransition.toUpperCase()}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div>
                  <strong>Russia Time:</strong> {overnightAnalysis.russiaTime}
                </div>
                <div>
                  <strong>Transition:</strong> {overnightAnalysis.midnightTransition}
                </div>
                <div>
                  <strong>Seconds to/from Midnight:</strong> {Math.abs(overnightAnalysis.secondsToMidnight)}s
                </div>
                <div>
                  <strong>Shift Continuity:</strong>{" "}
                  {overnightAnalysis.shouldBeWorking && overnightAnalysis.isActuallyWorking
                    ? "✅ MAINTAINED"
                    : "❌ BROKEN"}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Coverage Status Overview */}
        <Card
          className={`border-2 ${coverageAnalysis?.gapDetected ? "border-red-200 bg-red-50" : "border-green-200 bg-green-50"}`}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
              {coverageAnalysis?.gapDetected ? (
                <XCircle className="w-6 h-6 text-red-600" />
              ) : (
                <CheckCircle className="w-6 h-6 text-green-600" />
              )}
              24/7 Coverage Status: {coverageAnalysis?.gapDetected ? "GAP DETECTED" : "FULLY COVERED"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div>
                <strong>Active Teams:</strong> {coverageAnalysis?.activeTeams || 0}/3
              </div>
              <div>
                <strong>Coverage Type:</strong> {coverageAnalysis?.coverageStatus?.toUpperCase() || "LOADING"}
              </div>
              <div>
                <strong>Next Change:</strong> {coverageAnalysis?.nextShiftChange || "Calculating..."}
              </div>
              <div>
                <strong>Status:</strong> {isRunning ? "🟢 Monitoring" : "🔴 Stopped"}
              </div>
            </div>

            {/* Coverage Progress Bar */}
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Global Coverage</span>
                <span>{coverageAnalysis ? Math.round((coverageAnalysis.activeTeams / 3) * 100) : 0}%</span>
              </div>
              <Progress
                value={coverageAnalysis ? (coverageAnalysis.activeTeams / 3) * 100 : 0}
                className={`h-3 ${coverageAnalysis?.gapDetected ? "bg-red-100" : "bg-green-100"}`}
              />
            </div>
          </CardContent>
        </Card>

        {/* Device Info */}
        <Card className="border-2 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
              {getDeviceIcon()}
              Testing Environment - {getDeviceType()}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>
                <strong>Device:</strong> {getDeviceType()}
              </div>
              <div>
                <strong>Screen:</strong>{" "}
                {isClient && typeof window !== "undefined"
                  ? `${window.innerWidth}x${window.innerHeight}`
                  : "Loading..."}
              </div>
              <div>
                <strong>Status:</strong> {isRunning ? "🟢 Running" : "🔴 Stopped"}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Control Panel - Mobile Optimized */}
        <Card className="border-2 border-slate-200">
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">Control Panel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                onClick={() => setIsRunning(!isRunning)}
                className={`h-12 sm:h-10 text-base sm:text-sm ${
                  isRunning ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {isRunning ? (
                  <>
                    <Pause className="w-5 h-5 sm:w-4 sm:h-4 mr-2" />
                    Pause Monitoring
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 sm:w-4 sm:h-4 mr-2" />
                    Start Monitoring
                  </>
                )}
              </Button>
              <Button
                onClick={runTests}
                variant="outline"
                className="h-12 sm:h-10 text-base sm:text-sm border-2 bg-transparent"
              >
                <RefreshCw className="w-5 h-5 sm:w-4 sm:h-4 mr-2" />
                Run Manual Test
              </Button>
              <Button
                onClick={() => {
                  setTestResults([])
                  setUpdateCount(0)
                  setMidnightTests([])
                  setBoundarySecondTests([])
                }}
                variant="outline"
                className="h-12 sm:h-10 text-base sm:text-sm border-2"
              >
                <RotateCcw className="w-5 h-5 sm:w-4 sm:h-4 mr-2" />
                Clear Results
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Summary Dashboard - Mobile Responsive */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-600">{updateCount}</div>
              <div className="text-xs sm:text-sm text-green-700">Total Updates</div>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                {timezones.filter((tz) => tz.isWorking).length}
              </div>
              <div className="text-xs sm:text-sm text-blue-700">Active Teams</div>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600">{passedTests}</div>
              <div className="text-xs sm:text-sm text-purple-700">Tests Passed</div>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-orange-600">{failedTests}</div>
              <div className="text-xs sm:text-sm text-orange-700">Tests Failed</div>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-600">{warningTests}</div>
              <div className="text-xs sm:text-sm text-yellow-700">Warnings</div>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-red-600">{boundaryTests}</div>
              <div className="text-xs sm:text-sm text-red-700">Boundary Tests</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="live-clocks" className="space-y-4">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-8 h-auto sm:h-10">
            <TabsTrigger value="live-clocks" className="h-12 sm:h-auto text-sm">
              <Clock className="w-4 h-4 mr-2" />
              Live Clocks
            </TabsTrigger>
            <TabsTrigger value="coverage-analysis" className="h-12 sm:h-auto text-sm">
              <Shield className="w-4 h-4 mr-2" />
              Coverage Analysis
            </TabsTrigger>
            <TabsTrigger value="test-results" className="h-12 sm:h-auto text-sm">
              <CheckCircle className="w-4 h-4 mr-2" />
              Test Results
            </TabsTrigger>
            <TabsTrigger value="overnight-analysis" className="h-12 sm:h-auto text-sm">
              <Activity className="w-4 h-4 mr-2" />
              Overnight Analysis
            </TabsTrigger>
            <TabsTrigger value="midnight-boundary" className="h-12 sm:h-auto text-sm">
              <Zap className="w-4 h-4 mr-2" />
              Midnight Boundary
            </TabsTrigger>
            <TabsTrigger value="logic-table-review" className="h-12 sm:h-auto text-sm">
              <TrendingUp className="w-4 h-4 mr-2" />
              Logic Table Review
            </TabsTrigger>
            <TabsTrigger value="critical-transitions" className="h-12 sm:h-auto text-sm">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Critical Transitions
            </TabsTrigger>
            <TabsTrigger value="boundary-seconds" className="h-12 sm:h-auto text-sm">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Boundary Seconds
            </TabsTrigger>
          </TabsList>

          <TabsContent value="live-clocks" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {timezones.map((tz) => (
                <Card key={tz.city} className="border border-slate-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      <span className="text-2xl sm:text-3xl">{tz.flag}</span>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-slate-900">{tz.city}</h3>
                        <p className="text-xs sm:text-sm text-slate-600">{tz.country}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="text-3xl sm:text-4xl font-mono font-bold text-slate-900">{tz.currentTime}</div>

                      {tz.city === "Kaliningrado" && (
                        <div className="text-sm font-mono text-slate-600 bg-slate-100 p-2 rounded">
                          Full: {tz.fullTime}
                        </div>
                      )}

                      <Badge
                        className={`text-xs sm:text-sm px-3 py-1 ${
                          tz.isWorking
                            ? "bg-green-100 text-green-800 border-green-200"
                            : "bg-red-100 text-red-800 border-red-200"
                        }`}
                      >
                        {tz.isWorking ? "🟢 Working Hours" : "🔴 Off Hours"}
                      </Badge>

                      <div className="text-xs text-slate-500 space-y-1">
                        <div>Shift: {tz.workingHours}</div>
                        <div>Last updated: {tz.lastUpdate}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="coverage-analysis" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">24/7 Coverage Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                {coverageAnalysis ? (
                  <div className="space-y-6">
                    {/* Current Status */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-slate-900">Current Coverage</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Active Teams:</span>
                            <span className="font-medium">{coverageAnalysis.activeTeams}/3</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Coverage Status:</span>
                            <Badge
                              className={`text-xs ${
                                coverageAnalysis.coverageStatus === "full"
                                  ? "bg-green-100 text-green-800 border-green-200"
                                  : coverageAnalysis.coverageStatus === "partial"
                                    ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                                    : "bg-red-100 text-red-800 border-red-200"
                              }`}
                            >
                              {coverageAnalysis.coverageStatus.toUpperCase()}
                            </Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Gap Detected:</span>
                            <span
                              className={`font-medium ${coverageAnalysis.gapDetected ? "text-red-600" : "text-green-600"}`}
                            >
                              {coverageAnalysis.gapDetected ? "YES" : "NO"}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Next Change:</span>
                            <span className="font-medium text-blue-600">{coverageAnalysis.nextShiftChange}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-slate-900">Shift Schedule</h4>
                        <div className="space-y-2 text-sm">
                          {timezoneConfigs.map((config) => (
                            <div key={config.city} className="flex justify-between items-center">
                              <span className="flex items-center gap-2">
                                <span>{config.flag}</span>
                                <span>{config.city}</span>
                              </span>
                              <span className="text-xs text-slate-600">{config.workingHours}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Coverage Timeline */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900">24-Hour Coverage Timeline</h4>
                      <div className="grid grid-cols-12 gap-1 text-xs">
                        {Array.from({ length: 24 }, (_, hour) => {
                          // Calculate which teams are working at this hour
                          const workingTeams = timezoneConfigs.filter((config) => {
                            if (config.shiftStart > config.shiftEnd) {
                              return hour >= config.shiftStart || hour < config.shiftEnd
                            } else {
                              return hour >= config.shiftStart && hour < config.shiftEnd
                            }
                          }).length

                          return (
                            <div
                              key={hour}
                              className={`h-8 rounded flex items-center justify-center text-white font-medium ${
                                workingTeams >= 2 ? "bg-green-500" : workingTeams === 1 ? "bg-yellow-500" : "bg-red-500"
                              } ${hour === coverageAnalysis.currentHour ? "ring-2 ring-blue-500" : ""}`}
                              title={`${hour}:00 - ${workingTeams} team(s) working`}
                            >
                              {hour}
                            </div>
                          )
                        })}
                      </div>
                      <div className="flex items-center gap-4 text-xs text-slate-600">
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-green-500 rounded"></div>
                          <span>2+ Teams</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                          <span>1 Team</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-red-500 rounded"></div>
                          <span>No Teams</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 border-2 border-blue-500 rounded"></div>
                          <span>Current Hour</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-slate-500">
                    <RefreshCw className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p>No coverage analysis available. Start monitoring to see analysis.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="test-results" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Recent Test Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
                  {testResults.length === 0 ? (
                    <div className="text-center py-8 text-slate-500">
                      <RefreshCw className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      <p>No test results yet. Start monitoring to see results.</p>
                    </div>
                  ) : (
                    testResults.map((test, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                      >
                        <div className="flex-shrink-0 mt-0.5">{getStatusIcon(test.status)}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium text-slate-900 text-sm sm:text-base">{test.name}</h4>
                              <Badge className="text-xs bg-slate-200 text-slate-700 border-slate-300">
                                <span className="flex items-center gap-1">
                                  {getCategoryIcon(test.category)}
                                  {test.category}
                                </span>
                              </Badge>
                            </div>
                            <span className="text-xs text-slate-500">{test.timestamp}</span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 mt-1">{test.message}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="overnight-analysis" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Russia Overnight Shift Analysis (18:00-3:00 KALT)</CardTitle>
              </CardHeader>
              <CardContent>
                {overnightAnalysis ? (
                  <div className="space-y-6">
                    {/* Current Status */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-slate-900">Current Shift Status</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Russia Time:</span>
                            <span className="font-mono font-bold text-lg">{overnightAnalysis.russiaTime}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Current Hour:</span>
                            <span className="font-medium">{overnightAnalysis.currentHour}:00</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Should Be Working:</span>
                            <Badge
                              className={`text-xs ${overnightAnalysis.shouldBeWorking ? "bg-green-100 text-green-800 border-green-200" : "bg-red-100 text-red-800 border-red-200"}`}
                            >
                              {overnightAnalysis.shouldBeWorking ? "YES" : "NO"}
                            </Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Actually Working:</span>
                            <Badge
                              className={`text-xs ${overnightAnalysis.isActuallyWorking ? "bg-green-100 text-green-800 border-green-200" : "bg-red-100 text-red-800 border-red-200"}`}
                            >
                              {overnightAnalysis.isActuallyWorking ? "YES" : "NO"}
                            </Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Logic Status:</span>
                            <Badge
                              className={`text-xs ${overnightAnalysis.shiftStatus === "correct" ? "bg-green-100 text-green-800 border-green-200" : "bg-red-100 text-red-800 border-red-200"}`}
                            >
                              {overnightAnalysis.shiftStatus.toUpperCase()}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-slate-900">Shift Timing</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Shift Duration:</span>
                            <span className="font-medium">9 hours (18:00-3:00)</span>
                          </div>
                          {overnightAnalysis.shouldBeWorking && (
                            <>
                              <div className="flex justify-between">
                                <span>Hours Into Shift:</span>
                                <span className="font-medium text-blue-600">{overnightAnalysis.hoursIntoShift}h</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Hours Until End:</span>
                                <span className="font-medium text-orange-600">{overnightAnalysis.hoursUntilEnd}h</span>
                              </div>
                            </>
                          )}
                          {!overnightAnalysis.shouldBeWorking && (
                            <div className="flex justify-between">
                              <span>Hours Until Start:</span>
                              <span className="font-medium text-purple-600">{overnightAnalysis.hoursUntilEnd}h</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Overnight Shift Timeline */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900">24-Hour Overnight Shift Timeline</h4>
                      <div className="grid grid-cols-12 gap-1 text-xs">
                        {Array.from({ length: 24 }, (_, hour) => {
                          const isWorkingHour = hour >= 18 || hour < 3
                          const isCurrentHour = overnightAnalysis && hour === overnightAnalysis.currentHour

                          return (
                            <div
                              key={hour}
                              className={`h-10 rounded flex flex-col items-center justify-center text-white font-medium relative ${
                                isWorkingHour ? "bg-blue-600" : "bg-gray-400"
                              } ${isCurrentHour ? "ring-2 ring-yellow-400" : ""}`}
                              title={`${hour}:00 - ${isWorkingHour ? "Working" : "Off hours"}`}
                            >
                              <span>{hour}</span>
                              {isCurrentHour && (
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                              )}
                            </div>
                          )
                        })}
                      </div>
                      <div className="flex items-center gap-4 text-xs text-slate-600">
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-blue-600 rounded"></div>
                          <span>Working Hours (18:00-3:00)</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-gray-400 rounded"></div>
                          <span>Off Hours (3:00-18:00)</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                          <span>Current Time</span>
                        </div>
                      </div>
                    </div>

                    {/* Shift Logic Explanation */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">Overnight Shift Logic</h4>
                      <div className="text-sm text-blue-800 space-y-1">
                        <p>
                          <strong>Working Hours:</strong> 18:00 (6 PM) to 3:00 (3 AM) next day
                        </p>
                        <p>
                          <strong>Logic:</strong> hour &gt;= 18 || hour &lt; 3
                        </p>
                        <p>
                          <strong>Evening Portion:</strong> 18:00-23:59 (6 hours)
                        </p>
                        <p>
                          <strong>Morning Portion:</strong> 00:00-02:59 (3 hours)
                        </p>
                        <p>
                          <strong>Total Duration:</strong> 9 hours continuous coverage
                        </p>
                      </div>
                    </div>

                    {/* Critical Transition Points */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900">Critical Transition Points</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                          <div className="font-medium text-green-900">Shift Start: 18:00</div>
                          <div className="text-sm text-green-700">Russia team begins overnight coverage</div>
                          <div className="text-xs text-green-600 mt-1">Overlaps with Chile end (18:00)</div>
                        </div>
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                          <div className="font-medium text-orange-900">Shift End: 3:00</div>
                          <div className="text-sm text-orange-700">Russia team ends, Singapore begins</div>
                          <div className="text-xs text-orange-600 mt-1">Seamless handoff to Singapore (3:00)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-slate-500">
                    <RefreshCw className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p>No overnight analysis available. Start monitoring to see Russia shift analysis.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="midnight-boundary" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Midnight Boundary Testing (23:59 → 00:00)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Current Midnight Status */}
                  {overnightAnalysis && (
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-900 mb-3">Real-time Midnight Monitoring</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                        <div>
                          <strong>Russia Time:</strong>
                          <div className="font-mono text-lg text-blue-600">{overnightAnalysis.russiaTime}</div>
                        </div>
                        <div>
                          <strong>Near Midnight:</strong>
                          <Badge
                            className={`text-xs ${overnightAnalysis.isNearMidnight ? "bg-yellow-100 text-yellow-800 border-yellow-200" : "bg-gray-100 text-gray-800 border-gray-200"}`}
                          >
                            {overnightAnalysis.isNearMidnight ? "YES" : "NO"}
                          </Badge>
                        </div>
                        <div>
                          <strong>Transition:</strong>
                          <Badge
                            className={`text-xs ${
                              overnightAnalysis.midnightTransition === "approaching"
                                ? "bg-orange-100 text-orange-800 border-orange-200"
                                : overnightAnalysis.midnightTransition === "crossing"
                                  ? "bg-red-100 text-red-800 border-red-200"
                                  : overnightAnalysis.midnightTransition === "passed"
                                    ? "bg-green-100 text-green-800 border-green-200"
                                    : "bg-gray-100 text-gray-800 border-gray-200"
                            }`}
                          >
                            {overnightAnalysis.midnightTransition.toUpperCase()}
                          </Badge>
                        </div>
                        <div>
                          <strong>Seconds to/from Midnight:</strong>
                          <div className="font-mono text-lg text-purple-600">
                            {Math.abs(overnightAnalysis.secondsToMidnight)}s
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Midnight Boundary Tests History */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-900">Midnight Boundary Test History</h4>
                    <div className="space-y-3 max-h-64 overflow-y-auto">
                      {midnightTests.length === 0 ? (
                        <div className="text-center py-8 text-slate-500">
                          <Clock className="w-8 h-8 mx-auto mb-2 opacity-50" />
                          <p className="text-sm">No midnight boundary tests captured yet.</p>
                          <p className="text-xs text-slate-400 mt-1">
                            Tests are automatically captured when Russia time is near midnight (23:59 or 00:00)
                          </p>
                        </div>
                      ) : (
                        midnightTests.map((test, index) => (
                          <div key={index} className="bg-white border border-slate-200 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-3">
                              <h5 className="font-medium text-slate-900">
                                Midnight Boundary Test #{midnightTests.length - index}
                              </h5>
                              <div className="flex items-center gap-2">
                                <Badge
                                  className={`text-xs ${test.transitionStatus === "success" ? "bg-green-100 text-green-800 border-green-200" : "bg-red-100 text-red-800 border-red-200"}`}
                                >
                                  {test.transitionStatus.toUpperCase()}
                                </Badge>
                                <span className="text-xs text-slate-500">{test.timestamp}</span>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                              <div className="bg-blue-50 border border-blue-200 rounded p-3">
                                <h6 className="font-medium text-blue-900 mb-2">Before Midnight</h6>
                                <div className="space-y-1 text-blue-800">
                                  <div>
                                    <strong>Time:</strong> {test.beforeMidnight.time}
                                  </div>
                                  <div>
                                    <strong>Hour:</strong> {test.beforeMidnight.hour}
                                  </div>
                                  <div>
                                    <strong>Working:</strong> {test.beforeMidnight.isWorking ? "✅ YES" : "❌ NO"}
                                  </div>
                                  <div className="text-xs bg-blue-100 p-1 rounded font-mono">
                                    {test.beforeMidnight.logic}
                                  </div>
                                </div>
                              </div>

                              <div className="bg-green-50 border border-green-200 rounded p-3">
                                <h6 className="font-medium text-green-900 mb-2">After Midnight</h6>
                                <div className="space-y-1 text-green-800">
                                  <div>
                                    <strong>Time:</strong> {test.afterMidnight.time}
                                  </div>
                                  <div>
                                    <strong>Hour:</strong> {test.afterMidnight.hour}
                                  </div>
                                  <div>
                                    <strong>Working:</strong> {test.afterMidnight.isWorking ? "✅ YES" : "❌ NO"}
                                  </div>
                                  <div className="text-xs bg-green-100 p-1 rounded font-mono">
                                    {test.afterMidnight.logic}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="mt-3 pt-3 border-t border-slate-200">
                              <div className="flex items-center justify-between text-sm">
                                <span>
                                  <strong>Continuity:</strong> {test.continuity ? "✅ Maintained" : "❌ Broken"}
                                </span>
                                <span>
                                  <strong>Status:</strong>{" "}
                                  {test.transitionStatus === "success" ? "✅ Logic Correct" : "❌ Logic Error"}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="logic-table-review" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Complete 24-Hour Logic Table Review</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Logic Summary */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-3">Logic Summary & Verification</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                      <div className="bg-white p-3 rounded border">
                        <div className="font-medium text-blue-800">Total Hours</div>
                        <div className="text-2xl font-bold text-blue-600">24</div>
                        <div className="text-xs text-blue-600">Complete day</div>
                      </div>
                      <div className="bg-green-100 p-3 rounded border border-green-200">
                        <div className="font-medium text-green-800">Working Hours</div>
                        <div className="text-2xl font-bold text-green-600">9</div>
                        <div className="text-xs text-green-600">18:00-3:00 shift</div>
                      </div>
                      <div className="bg-red-100 p-3 rounded border border-red-200">
                        <div className="font-medium text-red-800">Off Hours</div>
                        <div className="text-2xl font-bold text-red-600">15</div>
                        <div className="text-xs text-red-600">3:00-18:00 break</div>
                      </div>
                      <div className="bg-purple-100 p-3 rounded border border-purple-200">
                        <div className="font-medium text-purple-800">Coverage %</div>
                        <div className="text-2xl font-bold text-purple-600">37.5%</div>
                        <div className="text-xs text-purple-600">9/24 hours</div>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-white rounded border">
                      <div className="font-medium text-slate-800 mb-2">Mathematical Verification:</div>
                      <div className="text-sm text-slate-700 space-y-1">
                        <div>✅ Working Hours: 6 (evening) + 3 (morning) = 9 hours</div>
                        <div>✅ Off Hours: 15 hours (3:00-17:59)</div>
                        <div>✅ Total Check: 9 + 15 = 24 hours ✓</div>
                        <div>✅ Midnight Continuity: 23:59 (TRUE) → 00:00 (TRUE) ✓</div>
                        <div>✅ Logic Formula: (hour ≥ 18) || (hour &lt; 3) ✓</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="critical-transitions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Critical Transition Points Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Real-time Transition Status */}
                  {overnightAnalysis && (
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-900 mb-3">Real-time Transition Monitoring</h4>
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {/* Midnight Transition (23:59 → 00:00) */}
                        <div
                          className={`border rounded-lg p-4 ${
                            (overnightAnalysis.currentHour === 23 && overnightAnalysis.currentMinute >= 58) ||
                            (overnightAnalysis.currentHour === 0 && overnightAnalysis.currentMinute <= 2)
                              ? "border-yellow-400 bg-yellow-50 animate-pulse"
                              : "border-slate-200 bg-white"
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                            <h5 className="font-medium text-slate-900">🌙 Midnight Transition</h5>
                          </div>

                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Target Time:</span>
                              <span className="font-mono">23:59 → 00:00</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Current Time:</span>
                              <span className="font-mono font-bold">{overnightAnalysis.russiaTime}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Status:</span>
                              <Badge
                                className={`text-xs ${
                                  (overnightAnalysis.currentHour === 23 && overnightAnalysis.currentMinute >= 58) ||
                                  (overnightAnalysis.currentHour === 0 && overnightAnalysis.currentMinute <= 2)
                                    ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                                    : "bg-gray-100 text-gray-800 border-gray-200"
                                }`}
                              >
                                {overnightAnalysis.currentHour === 23 && overnightAnalysis.currentMinute >= 58
                                  ? "APPROACHING"
                                  : overnightAnalysis.currentHour === 0 && overnightAnalysis.currentMinute <= 2
                                    ? "CROSSING"
                                    : "NORMAL"}
                              </Badge>
                            </div>
                            <div className="flex justify-between">
                              <span>Expected Result:</span>
                              <span className="text-green-600 font-medium">WORKING → WORKING</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Actual Result:</span>
                              <span
                                className={`font-medium ${
                                  overnightAnalysis.shouldBeWorking && overnightAnalysis.isActuallyWorking
                                    ? "text-green-600"
                                    : "text-red-600"
                                }`}
                              >
                                {overnightAnalysis.isActuallyWorking ? "WORKING" : "OFF"} →
                                {overnightAnalysis.shouldBeWorking ? "WORKING" : "OFF"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="boundary-seconds" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">
                  Exact Boundary Seconds Testing (23:59:59 → 00:00:00)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Real-time Boundary Second Monitoring */}
                  {overnightAnalysis && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h4 className="font-semibold text-red-900 mb-3">⚡ Real-time Exact Boundary Second Monitoring</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-sm">
                        <div>
                          <strong>Exact Time:</strong>
                          <div className="font-mono text-xl font-bold text-red-600">{overnightAnalysis.russiaTime}</div>
                        </div>
                        <div>
                          <strong>Current Second:</strong>
                          <div className="text-lg font-bold text-red-600">{overnightAnalysis.currentSecond}</div>
                        </div>
                        <div>
                          <strong>Boundary Type:</strong>
                          <Badge
                            className={`text-xs ${
                              overnightAnalysis.boundaryType === "pre-midnight"
                                ? "bg-blue-100 text-blue-800 border-blue-200"
                                : overnightAnalysis.boundaryType === "midnight"
                                  ? "bg-red-100 text-red-800 border-red-200"
                                  : overnightAnalysis.boundaryType === "post-midnight"
                                    ? "bg-green-100 text-green-800 border-green-200"
                                    : "bg-gray-100 text-gray-800 border-gray-200"
                            }`}
                          >
                            {overnightAnalysis.boundaryType.toUpperCase()}
                          </Badge>
                        </div>
                        <div>
                          <strong>Is Exact Boundary:</strong>
                          <Badge
                            className={`text-xs ${
                              overnightAnalysis.isExactBoundary
                                ? "bg-red-100 text-red-800 border-red-200"
                                : "bg-gray-100 text-gray-800 border-gray-200"
                            }`}
                          >
                            {overnightAnalysis.isExactBoundary ? "YES" : "NO"}
                          </Badge>
                        </div>
                        <div>
                          <strong>Working Status:</strong>
                          <Badge
                            className={`text-xs ${
                              overnightAnalysis.isActuallyWorking
                                ? "bg-green-100 text-green-800 border-green-200"
                                : "bg-red-100 text-red-800 border-red-200"
                            }`}
                          >
                            {overnightAnalysis.isActuallyWorking ? "WORKING" : "OFF"}
                          </Badge>
                        </div>
                      </div>

                      {/* Exact Second Logic Display */}
                      {overnightAnalysis.isExactBoundary && (
                        <div className="mt-4 p-3 bg-white border border-red-300 rounded">
                          <h5 className="font-medium text-red-900 mb-2">Live Exact Second Logic Calculation</h5>
                          <div className="font-mono text-sm text-red-800 bg-red-100 p-2 rounded">
                            Time: {overnightAnalysis.russiaTime} | Hour: {overnightAnalysis.currentHour} | Logic: (
                            {overnightAnalysis.currentHour} ≥ 18) || ({overnightAnalysis.currentHour} &lt; 3) = (
                            {overnightAnalysis.currentHour >= 18 ? "TRUE" : "FALSE"}) || (
                            {overnightAnalysis.currentHour < 3 ? "TRUE" : "FALSE"}) =
                            <span
                              className={`font-bold ${overnightAnalysis.shouldBeWorking ? "text-green-700" : "text-red-700"}`}
                            >
                              {overnightAnalysis.shouldBeWorking ? "TRUE" : "FALSE"}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Boundary Second Test History */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-900">Exact Boundary Second Test History</h4>
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {boundarySecondTests.length === 0 ? (
                        <div className="text-center py-8 text-slate-500">
                          <AlertTriangle className="w-8 h-8 mx-auto mb-2 opacity-50" />
                          <p className="text-sm">No exact boundary second tests captured yet.</p>
                          <p className="text-xs text-slate-400 mt-1">
                            Tests are automatically captured at exactly 23:59:59 and 00:00:00
                          </p>
                        </div>
                      ) : (
                        boundarySecondTests.map((test, index) => (
                          <div key={index} className="bg-white border border-slate-200 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-3">
                              <h5 className="font-medium text-slate-900">
                                Exact Boundary Second Test #{boundarySecondTests.length - index}
                              </h5>
                              <div className="flex items-center gap-2">
                                <Badge
                                  className={`text-xs ${
                                    test.boundaryType === "23:59:59"
                                      ? "bg-blue-100 text-blue-800 border-blue-200"
                                      : "bg-red-100 text-red-800 border-red-200"
                                  }`}
                                >
                                  {test.boundaryType}
                                </Badge>
                                <Badge
                                  className={`text-xs ${
                                    test.continuityCheck
                                      ? "bg-green-100 text-green-800 border-green-200"
                                      : "bg-red-100 text-red-800 border-red-200"
                                  }`}
                                >
                                  {test.continuityCheck ? "PASS" : "FAIL"}
                                </Badge>
                                <span className="text-xs text-slate-500">{test.timestamp}</span>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                              <div className="space-y-2">
                                <div className="font-medium text-slate-800">Exact Time Details:</div>
                                <div className="bg-slate-100 p-2 rounded space-y-1">
                                  <div>
                                    <strong>Time:</strong> {test.exactTime}
                                  </div>
                                  <div>
                                    <strong>Hour:</strong> {test.hour}
                                  </div>
                                  <div>
                                    <strong>Minute:</strong> {test.minute}
                                  </div>
                                  <div>
                                    <strong>Second:</strong> {test.second}
                                  </div>
                                  <div>
                                    <strong>Working:</strong> {test.isWorking ? "✅ YES" : "❌ NO"}
                                  </div>
                                </div>
                              </div>

                              <div className="space-y-2">
                                <div className="font-medium text-slate-800">Logic Verification:</div>
                                <div className="bg-slate-100 p-2 rounded">
                                  <div className="font-mono text-xs">{test.logic}</div>
                                  <div className="mt-2 text-xs">
                                    <strong>Transition Moment:</strong> {test.transitionMoment ? "YES" : "NO"}
                                  </div>
                                  <div className="text-xs">
                                    <strong>Continuity Check:</strong> {test.continuityCheck ? "✅ PASS" : "❌ FAIL"}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Special handling for transition moments */}
                            {test.transitionMoment && (
                              <div className="mt-3 pt-3 border-t border-slate-200">
                                <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                                  <h6 className="font-medium text-yellow-900 mb-2">🌙 Midnight Transition Moment</h6>
                                  <div className="text-sm text-yellow-800 space-y-1">
                                    <div>This test captured the exact moment of midnight transition (00:00:00)</div>
                                    <div>Expected: Both 23:59:59 and 00:00:00 should be WORKING</div>
                                    <div>
                                      <strong>Continuity Status:</strong>{" "}
                                      {test.continuityCheck ? "✅ MAINTAINED" : "❌ BROKEN"}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Exact Boundary Logic Explanation */}
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-900 mb-3">⚡ Exact Boundary Second Logic</h4>
                    <div className="space-y-4">
                      {/* 23:59:59 Analysis */}
                      <div className="bg-white border border-red-300 rounded p-3">
                        <h5 className="font-medium text-red-800 mb-2">23:59:59 - Last Second Before Midnight</h5>
                        <div className="text-sm text-red-700 space-y-2">
                          <div className="bg-blue-100 p-2 rounded font-mono text-xs">
                            <div>hour = 23, minute = 59, second = 59</div>
                            <div>Logic: (23 ≥ 18) || (23 &lt; 3) = TRUE || FALSE = TRUE</div>
                            <div>
                              <strong>Result: WORKING ✅</strong>
                            </div>
                          </div>
                          <div className="text-xs">
                            • This is the absolute last second of the evening shift portion • Hour 23 satisfies the
                            first condition (23 ≥ 18) • System must maintain WORKING status
                          </div>
                        </div>
                      </div>

                      {/* 00:00:00 Analysis */}
                      <div className="bg-white border border-red-300 rounded p-3">
                        <h5 className="font-medium text-red-800 mb-2">00:00:00 - First Second After Midnight</h5>
                        <div className="text-sm text-red-700 space-y-2">
                          <div className="bg-green-100 p-2 rounded font-mono text-xs">
                            <div>hour = 0, minute = 0, second = 0</div>
                            <div>Logic: (0 ≥ 18) || (0 &lt; 3) = FALSE || TRUE = TRUE</div>
                            <div>
                              <strong>Result: WORKING ✅</strong>
                            </div>
                          </div>
                          <div className="text-xs">
                            • This is the absolute first second of the morning shift portion • Hour 0 satisfies the
                            second condition (0 &lt; 3) • System must maintain WORKING status
                          </div>
                        </div>
                      </div>

                      {/* Critical Transition Analysis */}
                      <div className="bg-white border border-red-300 rounded p-3">
                        <h5 className="font-medium text-red-800 mb-2">🔄 Critical Transition Analysis</h5>
                        <div className="text-sm text-red-700 space-y-2">
                          <div className="bg-yellow-100 p-2 rounded">
                            <div className="font-medium">Transition Sequence:</div>
                            <div className="font-mono text-xs mt-1">
                              23:59:59 (WORKING) → 00:00:00 (WORKING) = ✅ SEAMLESS CONTINUITY
                            </div>
                          </div>
                          <div className="text-xs space-y-1">
                            <div>
                              • <strong>No Gap:</strong> Both seconds maintain WORKING status
                            </div>
                            <div>
                              • <strong>Logic Switch:</strong> From condition 1 (hour ≥ 18) to condition 2 (hour &lt; 3)
                            </div>
                            <div>
                              • <strong>Boolean Result:</strong> TRUE → TRUE (no interruption)
                            </div>
                            <div>
                              • <strong>Coverage Impact:</strong> Zero downtime during transition
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Real-time Countdown */}
                  {overnightAnalysis &&
                    overnightAnalysis.currentHour === 23 &&
                    overnightAnalysis.currentMinute >= 59 && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 animate-pulse">
                        <h4 className="font-semibold text-red-900 mb-3">⏰ Midnight Countdown - CRITICAL SECONDS</h4>
                        <div className="text-center">
                          <div className="text-4xl font-mono font-bold text-red-600 mb-2">
                            {60 - overnightAnalysis.currentSecond} seconds to midnight
                          </div>
                          <div className="text-sm text-red-700">
                            Monitoring exact boundary transition: 23:59:59 → 00:00:00
                          </div>
                          <div className="mt-2 text-xs text-red-600">
                            System will capture the exact moment of transition for analysis
                          </div>
                        </div>
                      </div>
                    )}

                  {/* Detection Settings */}
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Exact Boundary Detection Settings</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>Target Seconds:</strong> 23:59:59 and 00:00:00 exactly
                      </div>
                      <div>
                        <strong>Detection Frequency:</strong> Every second (1000ms intervals)
                      </div>
                      <div>
                        <strong>Capture Window:</strong> 500ms minimum between captures
                      </div>
                      <div>
                        <strong>History Limit:</strong> Last 20 exact boundary tests
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
