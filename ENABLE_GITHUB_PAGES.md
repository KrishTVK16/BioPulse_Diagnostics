# How to Enable GitHub Pages - Step by Step

## 🚨 Current Error

The error message indicates:
```
Ensure GitHub Pages has been enabled: 
https://github.com/KrishTVK16/BioPulse_Diagnostics/settings/pages
```

**This means GitHub Pages is NOT enabled in your repository settings.**

---

## ✅ Solution: Enable GitHub Pages

### Step 1: Go to Repository Settings

1. Open your repository: `https://github.com/KrishTVK16/BioPulse_Diagnostics`
2. Click on **Settings** tab (top menu, next to Insights)
3. If you don't see Settings, you may not have admin access - ask the repository owner

### Step 2: Navigate to Pages Section

1. In the left sidebar, scroll down and click **"Pages"**
2. You should see a page with "GitHub Pages" settings

### Step 3: Configure Pages Source

1. Under **"Source"** section, you'll see a dropdown
2. **IMPORTANT**: Select **"GitHub Actions"** from the dropdown
   - DO NOT select "Deploy from a branch"
   - DO NOT select "Deploy from a branch" with folder selection
   - MUST select **"GitHub Actions"**

### Step 4: Save Settings

1. After selecting "GitHub Actions", click **"Save"** button
2. You should see a confirmation message

### Step 5: Verify Pages is Enabled

After saving, you should see:
- ✅ A green checkmark or success message
- ✅ The source shows "GitHub Actions"
- ✅ A note that Pages is enabled

---

## 🔄 After Enabling Pages

### Option 1: Re-run the Workflow

1. Go to **Actions** tab in your repository
2. Find the failed workflow run
3. Click on it
4. Click **"Re-run all jobs"** button (top right)
5. Wait for it to complete

### Option 2: Push a New Commit

```bash
# Make a small change to trigger the workflow
git add .
git commit -m "Trigger Pages deployment"
git push origin main
```

---

## 📋 Pre-Deployment Checklist

Before the workflow will work, ensure:

- [ ] **GitHub Pages is enabled** (Settings → Pages → Source: GitHub Actions)
- [ ] **Repository name is correct** in `vite.config.ts` (line 9)
  - Current repo: `BioPulse_Diagnostics`
  - Update to: `'/BioPulse_Diagnostics/'`
- [ ] **You have admin/write access** to the repository
- [ ] **Workflow file exists** at `.github/workflows/deploy.yml`

---

## 🔍 Verify Repository Name

Your repository is: `BioPulse_Diagnostics`

**Check `vite.config.ts` line 9:**
```typescript
const base = process.env.GITHUB_PAGES === 'true' ? '/BioPulse_Diagnostics/' : '/';
```

Make sure it matches exactly (case-sensitive):
- ✅ Correct: `'/BioPulse_Diagnostics/'`
- ❌ Wrong: `'/biopulse-app/'`
- ❌ Wrong: `'/biopulse_diagnostics/'`

---

## 🎯 Quick Fix Summary

1. **Enable Pages**: Go to Settings → Pages → Source: "GitHub Actions" → Save
2. **Update Config**: Ensure `vite.config.ts` has correct repo name
3. **Re-run Workflow**: Go to Actions → Re-run failed workflow
4. **Wait**: Deployment takes 2-3 minutes
5. **Visit**: `https://KrishTVK16.github.io/BioPulse_Diagnostics/`

---

## ⚠️ Common Issues

### Issue: "Settings" tab not visible
**Solution**: You need admin/write access. Ask repository owner to:
- Give you admin access, OR
- Enable Pages themselves

### Issue: "GitHub Actions" option not available
**Solution**: 
- Make sure you're on the Pages settings page
- If still not available, try refreshing the page
- Some repositories may need to be public (or have Pages enabled for private repos with GitHub Pro)

### Issue: Still getting 404 after enabling
**Solution**:
- Wait 1-2 minutes after enabling
- Re-run the workflow
- Check that repository name in `vite.config.ts` is correct

---

## ✅ Once Enabled

After enabling GitHub Pages and re-running the workflow:

1. ✅ Workflow will complete successfully
2. ✅ Site will be live at: `https://KrishTVK16.github.io/BioPulse_Diagnostics/`
3. ✅ Future pushes will auto-deploy

---

**The main issue is that GitHub Pages needs to be enabled in Settings first!**

