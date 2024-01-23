// To run the Project

Clone this repository on your Desktop
Install Expo Go app on your Android, and sign in to Expo
Go to chrome and sign in to Cloudinary
Go to settings on Cloudinary console, click on Settings, click on Upload tab, create an unsigned preset and copy its name. 
Open the folder using VSCode
In the cloudConfig.js file, replace api_key string with your account's API Key, same goes for the cloud_name string
In UploadPage.js, in formData.append, replace the string associated with upload_preset with your preset name
Open VSCode terminal
Run the following command :- npm install, then run :- npx expo start
A QRCode appears in the terminal, scan the QRcode using the Expo Go App
The React Native Photo Management App appears on the phone.
