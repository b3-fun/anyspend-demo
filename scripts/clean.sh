# Remove all node_modules
echo "Removing node_modules"
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +

# Remove .next, dist, .tsbuildinfo, tsconfig.tsbuildinfo as before
echo "Removing .next, dist, .tsbuildinfo, tsconfig.tsbuildinfo"
find . -name '.next' -type d -prune -exec rm -rf '{}' +
find . -name 'dist' -type d -prune -exec rm -rf '{}' +
find . -name '.tsbuildinfo' -type f -prune -exec rm -rf '{}' +
find . -name 'tsconfig.tsbuildinfo' -type f -prune -exec rm -rf '{}' +

# Install dependencies
echo "Installing dependencies"
pnpm install
