module.exports = {
   logging: false,
   user: {
      metaData: true,
   },
   cms: {
      GoogleSheetsCMS: {
        spreadsheetId:  '1eg2U73VS1PX-MpSq0yVfsgDI5HWfZjI61EZOSzBn3Ek',
        access: 'private',
        credentialsFile: './creds/google-sheets.json',
        sheets: [
          {
            name: 'test',
            type: 'Responses'
          }
        ],
        caching: true
      }
   },
   intentMap: {
      'AMAZON.StopIntent': 'END',
   }
};

// cms: {
//    GoogleSheetsCMS: {
//      spreadsheetId:  '1eg2U73VS1PX-MpSq0yVfsgDI5HWfZjI61EZOSzBn3Ek',
//      access: 'private',
//      credentialsFile: './creds/google-sheets.json',
//      sheets: [
//        {
//          name: 'test',
//          type: 'Responses'
//        }
//      ],
//      caching: true
//    }
// },

// cms: {
//    GoogleSheetsCMS: {
//       spreadsheetId:  '17TRfhTvmIgqO7HqyWGEjsYrJAF_-NbhcMo5GYgljHb4',
//       access: 'public',
//       sheets: [
//          {
//          name: 'test',
//          type: 'Responses',
//          position: 1,
//          }
//       ],
//       caching: true
//    }
// },
