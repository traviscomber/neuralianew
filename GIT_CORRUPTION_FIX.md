# Git Corruption Fix Instructions

## Problem
The GitHub repository has a corrupted git object: `/////////[locale////////]/page`
This causes Next.js builds to fail with: `NormalizeError: Requested and resolved page mismatch`

## Solution - Run These Steps Locally

### Step 1: Clone a fresh copy
```bash
rm -rf repo-clean
git clone https://github.com/traviscomber/neuralianew.git repo-clean
cd repo-clean
git checkout v0/travis-2540-dc280fa7
```

### Step 2: Clean git corruption
```bash
git reflog expire --expire=now --all
git gc --aggressive --prune=now
git fsck --full
```

### Step 3: Force push the cleaned state
```bash
git push -f origin v0/travis-2540-dc280fa7
```

### Step 4: Redeploy
Go to Vercel and click "Redeploy" or push a new commit

## What This Does
- Removes all git reference logs
- Forces garbage collection and pruning of corrupted objects
- Rebuilds git's object database from clean state
- Pushes the clean state back to GitHub

## If That Still Doesn't Work
If the corruption persists, you may need to:
1. Create a new branch from main
2. Cherry-pick the commits you want to keep
3. Push the new branch to GitHub
4. Update Vercel to deploy from the new branch

---

This is a git-level issue that MUST be resolved locally on your machine.
