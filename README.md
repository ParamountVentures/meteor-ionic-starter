#meteor ionic starter

After looking around to try and find a working starter example of Meteor and Ionic and after hours of integration issues (both are fast moving at the moment are Meteor, Ionic and Angular get better integration) I figured it would be useful for others to benefit from the time i put in.

This is a simple starter example and I will try to keep it up to date and things progress.

##Steps
###Web
1. Create the project **meteor create meteor-ionic-starter** - ensure you are working with Meteor 1.2.0.1+.
2. Add the official Meteor Ionic package **meteor add driftyco:ionic**
3. Add the angular package **meteor add urigo:angular**
4. Remove boilerplate code from the .js file and add with new code.
5. Ensure 'angular-meteor' as added as a dependent module.
6. Run in the terminal as **meteor**

###Android
1. Using the Android SDK Manager, ensure you have SDK Platform 23+ installed.
2. Install the meteor Android SDK **meteor install-sdk android**
3. Add as a platform **meteor add-platform android**
4. Create an Android AVD (terminal - "android avd") and ensure that "Use Host GPU" in the Emulation Options is checked.
5. Run **meteor run android**

###iOS
1. Install the meteor iOS SDK **meteor install-sdk ios**
3. Add as a platform **meteor add-platform ios**.
3. Run this **meteor run ios**

Note that if you are on iOS 9, it will work for this demo, but you will get connection exceptions in the console log due to Apple's new App Transport Security [1], which requires an SSL connection to the server (meteor typically using http://localhost:3000 etc.).

To solve this error in development you have a couple of (non-optimal for development) options as outlined in [2].

For the purposes of this demo, i did the following :

 - Navigate to meteor-ionic-starter/.meteor/local/cordova-build/platforms/ios/meteor-ionic-starter
 - Open meteor-ionic-starter-Info.plist in a text editor
 - Inside (as a child element) the first &lt;dict> element add the following:

 ```
 <key>NSAppTransportSecurity</key>
 <dict>
   <key>NSAllowsArbitraryLoads</key>
       <true/>
 </dict>
 ```

- Run this **meteor run ios**

*Please note you absolutely should not use the wildcard in in production as Apple will likely reject your app [3]. Ideally use only secure endpoints, but if that is not possible, add per-domain exceptions [2] rather than a wildcard.*

[1] https://developer.apple.com/library/prerelease/ios/technotes/App-Transport-Security-Technote/index.html

[2] http://stackoverflow.com/questions/30731785/how-do-i-load-an-http-url-with-app-transport-security-enabled-in-ios-9/30732693#30732693

[3] https://github.com/AFNetworking/AFNetworking/issues/2779#issuecomment-112030880

