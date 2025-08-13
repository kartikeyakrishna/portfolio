# 🌿 Git Workflow Guide

## 📋 Branch Strategy

### `main` Branch
- **Purpose**: Production-ready code for deployment
- **Protection**: Should only contain stable, tested code
- **Deployment**: Connected to Netlify for automatic deployment
- **Merge Policy**: Only merge from `dev` after thorough testing

### `dev` Branch
- **Purpose**: Development and testing new features
- **Usage**: All new development happens here
- **Freedom**: Safe to experiment, break, and fix things
- **Testing**: Use this branch to test changes before production

## 🔄 Development Workflow

### For New Features/Changes

1. **Switch to dev branch**
   ```bash
   git checkout dev
   git pull origin dev
   ```

2. **Make your changes**
   - Edit components, styles, content
   - Test locally with `npm run dev`
   - Run quality checks: `npm run lint` and `npm run build`

3. **Commit and push to dev**
   ```bash
   git add .
   git commit -m "feat: your feature description"
   git push origin dev
   ```

4. **Test thoroughly on dev branch**
   - Verify all functionality works
   - Check responsive design
   - Test animations and interactions

### For Production Deployment

5. **Merge dev to main when ready**
   ```bash
   git checkout main
   git pull origin main
   git merge dev
   git push origin main
   ```

6. **Netlify auto-deploys**
   - Netlify watches the `main` branch
   - Automatic deployment triggers on push
   - Live site updates in minutes

## 🛡️ Branch Protection Best Practices

### Always Use Dev First
```bash
# ✅ Good workflow
git checkout dev          # Switch to dev
# Make changes...
git push origin dev       # Push to dev first
# Test thoroughly...
git checkout main         # Switch to main
git merge dev            # Merge stable code
git push origin main     # Deploy to production

# ❌ Avoid direct main commits
git checkout main        # Don't do this for development
# Make changes directly... # Risky for production
```

### Quick Commands Reference

```bash
# Check current branch
git branch

# Switch branches
git checkout main        # Switch to main (production)
git checkout dev         # Switch to dev (development)

# Create new feature branch (optional)
git checkout -b feature/new-feature

# View all branches
git branch -a

# Pull latest changes
git pull origin dev      # Update dev branch
git pull origin main     # Update main branch

# Push changes
git push origin dev      # Push to development
git push origin main     # Push to production (triggers deployment)
```

## 🚀 Deployment Process

### Current Setup
- **Production Branch**: `main`
- **Development Branch**: `dev`
- **Auto-Deploy**: Netlify watches `main` branch
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`

### Before Merging to Main
- [ ] Code builds successfully (`npm run build`)
- [ ] No linting errors (`npm run lint`)
- [ ] All features tested locally
- [ ] Responsive design verified
- [ ] No console errors in browser

## 🔧 Emergency Hotfixes

For urgent production fixes:

1. **Create hotfix from main**
   ```bash
   git checkout main
   git checkout -b hotfix/urgent-fix
   ```

2. **Make minimal fix and test**
   ```bash
   # Fix the issue
   git add .
   git commit -m "fix: urgent production hotfix"
   ```

3. **Deploy immediately**
   ```bash
   git checkout main
   git merge hotfix/urgent-fix
   git push origin main     # Triggers immediate deployment
   ```

4. **Sync back to dev**
   ```bash
   git checkout dev
   git merge main          # Keep dev in sync
   git push origin dev
   ```

## 📊 Current Status

- ✅ **Main Branch**: Production-ready, connected to Netlify
- ✅ **Dev Branch**: Ready for development work
- ✅ **Deployment**: Automatic via Netlify when pushing to main
- ✅ **Documentation**: Complete with deployment guides

## 🎯 Next Steps

1. **For Development**: Always work on `dev` branch
2. **For Deployment**: Merge `dev` → `main` when ready
3. **For Hotfixes**: Use hotfix branches from `main`
4. **For Features**: Optionally use feature branches from `dev`

---

**Happy coding! 🚀 Remember: dev for development, main for production!**
