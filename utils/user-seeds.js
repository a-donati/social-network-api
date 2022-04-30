// username seed data
const usernames = [
    'kamikazedeanna',
    'vanillamojo',
    'chocolatemojo',
    'angielicious',
    'nxiik',
    'sajuuk',
    'aneko',
    'cpmorrison',
    'trodgers',
    'albgar03',
    'ryanFlockaMartino',
    'djd2003',
    'cbeans',
    'dlc1992',
    'plank2984',
  ];
//   email data
  const emails = [
    'fbiagent@gmail.com',
    'iamnotacop@gmail.com',
    'mystikaldarkness@hotmail.com',
    'v0idboi@yahoo.com',
    'ralphwiggums@northernessex.edu',
    'monopolyman@mass.gov',
    'slenderman@yahoo.com',
    'b4s3m3ntdw3ll3r@hotmail.com',
    'frenchmystery@france.eu',
    'th0tpatr0l@hotmail.com',
    'jozienthepussycats@neopets.com',
    'sailormarsluvr@yahoo.com',
    'catsrunmylife@gmail.com',
    'bignanny@aol.com',
    'smallcatsteps@aol.com'

  ];
//   set currentEmail index to 0
  let currentEmail = 0;
//   get random index using Math.random * array length
  const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);
//   cycle through emails array
  function getEmails(){
    let listEmail = emails[currentEmail];
    currentEmail++;
    return listEmail;
  }
//   get random username - pass in usernames into randomizing index array
  const getRandomUsername = () => `${usernames[genRandomIndex(usernames)]}`;
// get username + email object
  function getUser(){
    const userObject = {username: getRandomUsername(), email: getEmails()};
    return userObject;
  }
  
  module.exports = getUser;