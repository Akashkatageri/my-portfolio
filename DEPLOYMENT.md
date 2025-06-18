# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages with a custom domain.

## Prerequisites

1. A GitHub account
2. Your custom domain (e.g., `yourname.com`)
3. Access to your domain's DNS settings

## Step 1: Create GitHub Repository

1. Go to GitHub and create a new repository
2. Name it whatever you like (e.g., `portfolio-website`)
3. Make it public (required for GitHub Pages on free accounts)
4. Don't initialize with README, .gitignore, or license

## Step 2: Upload Your Code

1. Download this entire project as a ZIP file
2. Extract it to your local computer
3. Update the `public/CNAME` file with your actual domain name
4. Initialize git and push to GitHub:

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

## Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. The workflow will automatically run when you push code

## Step 4: Configure Your Custom Domain

### Update CNAME file
1. Edit the `public/CNAME` file in your repository
2. Replace `yourdomain.com` with your actual domain
3. Commit and push the change

### Configure DNS Settings
Add these DNS records in your domain provider's control panel:

**For apex domain (yourname.com):**
```
Type: A
Name: @
Value: 185.199.108.153
```
```
Type: A  
Name: @
Value: 185.199.109.153
```
```
Type: A
Name: @
Value: 185.199.110.153
```
```
Type: A
Name: @
Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: yourusername.github.io
```

## Step 5: Enable HTTPS

1. In your repository settings under "Pages"
2. Check "Enforce HTTPS" (may take a few minutes to appear)
3. Wait for SSL certificate to be issued (can take up to 24 hours)

## Step 6: Verify Deployment

1. Visit your custom domain
2. Check that the site loads correctly
3. Verify all sections work properly

## Troubleshooting

- **Site not loading**: Check DNS propagation (can take up to 48 hours)
- **Build failing**: Check the Actions tab for error details
- **Custom domain not working**: Verify CNAME file and DNS settings
- **SSL certificate issues**: Wait 24 hours, then contact GitHub support

## Updating Your Site

To update your portfolio:
1. Make changes to your code
2. Commit and push to the main branch
3. GitHub Actions will automatically rebuild and redeploy your site

Your portfolio will be live at your custom domain within minutes of pushing changes!