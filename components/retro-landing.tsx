'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Locale } from '@/lib/get-locale'

const copy = {
  es: {
    hero: {
      eyebrow: 'Inteligencia · Automatización · Ejecución',
      title: 'Convierte la complejidad en ejecución inteligente.',
      body: '