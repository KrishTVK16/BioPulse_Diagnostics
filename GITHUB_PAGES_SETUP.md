# GitHub Pages Setup Instructions

## ⚠️ Error Fix: "Get Pages site failed"

This error occurs because GitHub Pages is not enabled in your repository settings. Follow these steps:

---

## 📋 Step-by-Step Setup

### Step 1: Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **"GitHub Actions"** (NOT "Deploy from a branch")
5. Click **Save**

**Important**: You MUST select "GitHub Actions" as the source, not "Deploy from a branch"

---

### Step 2: Verify Repository Name

1. Check your repository name (e.g., `biopulse-app`, `my-diagnostics-site`, etc.)
2. Update `vite.config.ts` line 9 with your exact repository name:
   ```typescript
   const base = process.env.GITHUB_PAGES === 'true' ? '/YOUR-REPO-NAME/' : '/';
   ```
   Replace `YOUR-REPO-NAME` with your actual repository name

---

### Step 3: Push Your Code

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

---

### Step 4: Monitor Deployment

1. Go to **Actions** tab in your repository
2. You should see "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 2-3 minutes)
4. Once green ✅, your site will be live

---

### Step 5: Access Your Site

Your site will be available at:
```
https://[your-username].github.io/[your-repo-name]/
```

Example:
- Username: `john-doe`
- Repo name: `biopulse-app`
- URL: `https://john-doe.github.io/biopulse-app/`

---

## 🔧 What I Fixed

1. **Removed `configure-pages` step** - Not needed with newer GitHub Actions
2. **Simplified workflow** - Uses `upload-pages-artifact` and `deploy-pages` directly
3. **Workflow is now compatible** with GitHub Pages setup

---

## ✅ Verification Checklist

After enabling GitHub Pages:

- [ ] Pages is enabled in Settings → Pages
- [ ] Source is set to "GitHub Actions"
- [ ] Repository name is correct in `vite.config.ts`
- [ ] Code is pushed to main/master branch
- [ ] Actions workflow runs successfully
- [ ] Site is accessible at the GitHub Pages URL

---

## 🚨 Common Issues

### Issue 1: "Get Pages site failed"
**Solution**: Enable GitHub Pages in Settings → Pages → Source: "GitHub Actions"

### Issue 2: "404 Not Found" after deployment
**Solution**: Check repository name in `vite.config.ts` matches your actual repo name

### Issue 3: Assets not loading
**Solution**: Verify base path in `vite.config.ts` is correct

### Issue 4: Workflow doesn't trigger
**Solution**: 
- Check branch name (should be `main` or `master`)
- Verify workflow file is in `.github/workflows/` directory
- Check Actions tab for any errors

---

## 📝 Quick Reference

**Repository Settings Path**:
```
Repository → Settings → Pages → Source: GitHub Actions
```

**Workflow File Location**:
```
.github/workflows/deploy.yml
```

**Config File to Update**:
```
vite.config.ts (line 9 - repository name)
```

---

## 🎯 Next Steps

1. Enable GitHub Pages (Settings → Pages → GitHub Actions)
2. Update repository name in `vite.config.ts`
3. Push code to trigger deployment
4. Wait for Actions to complete
5. Visit your live site!

Your workflow is now fixed and ready to deploy! 🚀

