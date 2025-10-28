[![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/cmtanko)

# Your Personal Expense Manager

A React Native expense tracking app that helps you manage your financial records quickly and effectively. Track your incomes and expenses, view analytics, and keep all your data secure.

## App Store Links

- [App Store](https://apps.apple.com/au/app/your-personal-expense-manager/id1569814201)
- [Play Store](https://play.google.com/store/apps/details?id=io.newplanet.reactnativestarterkit)

## Features

- ✅ Quickly add incomes and expenses
- ✅ Filter by account, category, expense type, and dates
- ✅ Password protected with secure local storage
- ✅ Backup to Google Drive
- ✅ Search functionality
- ✅ Analytics charts for income and expense tracking
- ✅ Fully offline capable
- 🚧 Budget planning per category (coming soon)
- 🚧 Recurring transactions (coming soon)


## Screenshots

![App Overview](screenshots/overview.JPG)

## Prerequisites

- Node.js (v14 or higher recommended)
- React Native 0.63.3
- iOS: Xcode 12+ with CocoaPods
- Android: Android Studio with Android SDK
- Ruby 2.7+ and Fastlane for deployment

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Your_Personal_Expense_Manager
```

2. Install dependencies:
```bash
npm install
```

3. Install platform-specific dependencies:
```bash
npm run install-deps
```

### Running the App

For development:

```bash
# Terminal 1: Start Metro bundler
npm run start

# Terminal 2: Run on iOS
npm run start-ios

# Or run on Android
npm run start-android
```

### Building for Production

```bash
# Build for iOS
npm run build-ios

# Build for Android
npm run build-android
```

### iOS Configuration

1. Configure environment variables (create `.env` file if needed)
2. Run pod install:
```bash
cd ios && pod install && cd ..
```

### Android Configuration

For Android release builds, set up your signing credentials:

```bash
export MY_RELEASE_STORE_FILE=path/to/your.keystore
export MY_RELEASE_STORE_PASSWORD=your_store_password
export MY_RELEASE_KEY_ALIAS=your_key_alias
export MY_RELEASE_KEY_PASSWORD=your_key_password
export ANDROID_HOME=$HOME/Library/Android/sdk
```

Deploy releases using Fastlane:

```bash
# iOS alpha release
npm run alpha-release-ios

# Android alpha release
npm run alpha-release
```

## Available Scripts

### Development

```bash
npm run start              # Start Metro bundler
npm run start-ios          # Run on iOS simulator
npm run start-android      # Run on Android emulator
```

### Building

```bash
npm run build-ios          # Build iOS app
npm run build-android      # Build Android app
npm run bundle:ios         # Bundle iOS JavaScript
```

### Testing

```bash
npm run test               # Run E2E tests with Detox
npm run test-v             # Run tests with verbose output
npm run jest               # Run Jest unit tests
```

### Maintenance

```bash
npm run clean-android      # Clean Android build cache
npm run clear-cache        # Clear all caches (Metro, Android, iOS)
npm run reinstall          # Clean reinstall of all dependencies
```

### Code Quality

```bash
npm run lint                # Run ESLint
npm run lint:fix            # Fix linting issues
npm run prettier            # Format code with Prettier
npm run format-code         # Format and fix code
```

## Troubleshooting

### iOS Setup Issues

**Podfile out of sync:**

```bash
cd ios
pod update
pod install
cd ..
```

### Metro Bundler Issues

**Port already in use:**

```bash
# Find the process
sudo lsof -i :8081

# Kill the process (replace PID with actual number)
kill -9 <PID>
```

**Clear all Metro caches:**

```bash
npm run clear-cache
```

### iOS Simulator Crashing

If the simulator crashes without errors:

```bash
# Clean iOS build
rm -rf ./ios/build

# Clean watchman cache
watchman watch-del-all

# Clean React Native cache
rm -rf $TMPDIR/react-*

# Kill Metro
lsof -ti :8081 | xargs kill -9

# Reinstall pods
cd ios && pod install && cd ..

# Rebuild
react-native run-ios
```

### Fastlane Node Issues

If Fastlane doesn't recognize Node:

```bash
ln -s $(which node) /usr/local/bin/node
```

### Build and Reinstall Everything

Nuclear option - clean everything and reinstall:

```bash
npm run reinstall
```

## Tech Stack

- **React Native** - Cross-platform mobile development
- **Redux** - State management
- **React Navigation** - Navigation
- **Native Base** - UI components
- **Detox** - E2E testing framework
- **Jest** - Unit testing
- **Fastlane** - CI/CD automation
- **SQLite** - Local data storage
- **Google Drive API** - Cloud backup

## Project Structure

```
src/
├── actions/          # Redux action creators
├── reducers/         # Redux reducers
├── components/       # React components
├── services/         # API and data services
├── utils/            # Helper functions
├── helpers/          # Database helpers
├── theme/            # Styling and theme configuration
└── navigation.js     # Navigation configuration
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.


### Update in react-native-timeline-flatlist
```
<FlatList
  ListHeaderComponent={<this.props.ListHeaderComponent/>}   <--- Add this line
  style={[styles.listview, this.props.listViewStyle]}
  contentContainerStyle={this.props.listViewContainerStyle}
  data={this.state.data}
  extraData={this.state}
  renderItem={this._renderItem}
  keyExtractor={(item, index) => index + ""}
  {...this.props.options}
/>
```