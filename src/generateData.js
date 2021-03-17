const fs = require('fs');
const crypto = require('crypto');
const args = require('minimist')(process.argv.slice(2));
const { uniqueNamesGenerator, names, animals, colors, adjectives } = require('unique-names-generator');

const namesConfig = {
    dictionaries: [names, names],
    length: 2,
    separator: '_',
    style: 'lowerCase'
};

const filesConfig = {
    dictionaries: [animals, colors, adjectives],
    length: 2,
    separator: ' ',
};

function createFileName() {
    const pre = uniqueNamesGenerator(filesConfig);
    const post = pre.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      }).replace(/\s+/g, '');
    return post;
}

// eslint-disable-next-line no-extend-native
Date.prototype.addHours = function(h) {
    this.setTime(this.getTime() + (h*60*60*1000));
    return this;
}

// Utils

function generateHash() {
    const sha256 = crypto.createHash('sha256');
    const date = `${new Date()}${Math.random()}${Math.random()}`;
    sha256.update(date);
    return sha256.digest('hex');
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function generateExtension() {
    const extensions = [
        'doc',
        'docx',
        'html',
        'xml',
        'pdf',
        'xls',
        'ppt',
        'pptx',
        'txt',
        'jpeg',
        'gif',
        'png',
        'mp3',
        'mov',
        'webm',
        'mp4',
        'wav',
        'zip',
        'gzip',
        'jar',
        'bin',
        '7z',
        'exe',
        'dmg',
        'py',
        'js',
        'rar',
        'tar',
        'tar.gz',
    ];
    const shuffledExtensions = shuffle(extensions);
    const extension = shuffledExtensions[Math.floor(Math.random() * shuffledExtensions.length)];
    return extension;
}

function generateTripleBools() {
    const arr = [];
    while (arr.length < 4) {
        const random = Math.random() < 0.5;
        if (arr.length === 2 && !arr.includes(true)) {
            arr.push(true);
            break;
        }
        arr.push(random);
    }
    return shuffle(arr);
}

function generateRandomSplit(max, thecount) {
    var r = [];
    var currsum = 0;
    for(let i=0; i<thecount; i++) {
        r.push(Math.random());
        currsum += r[i];
    }
    for(let i=0; i<r.length; i++) {
        r[i] = Math.round(r[i] / currsum * max);
    }
    return r;
}

// Constants

const projectId = 'bd4c38b3fe2012640c5e9413b1cd91acc89694c6a0f1826cdde04637b66890fa';
const contracts = {
    ethereum: 'cec22e6606de9cebe39ec5d3e3af05b3384a0ee5daf8538761de86dde50e548e',
    harmony: 'fdd74ae6f7a3bbf7616b6b55cb16ac1e5f02732137ad0a916e6956568188e454',
    polkadot: '91f478da2353c1ffcc6d87ee5a6b4b457cb06ae6042b8ff73762e7604367a650'
};
const apiKeys = [
    '74386c082d9b11c07387b323acc9d20bb4c8d6527aa5e185d60ba8dc66c3e170',
    'a3ab215f87fac9a9c98e187f1ce397d959fdacf272a396bfe82fb3a19064fb00'
];

let users = [];

function generateUsers(numUsers = 0) {
    const localUsers = [];
    while (localUsers.length <= numUsers - 1) {
        const user = uniqueNamesGenerator(namesConfig);
        localUsers.push(user);
    }
    users = localUsers.map(user => {
        const userWithData = {};
        userWithData.username = user;
        const [firstName, lastName] = user.split('_');
        userWithData.firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
        userWithData.lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
        userWithData.id = generateHash();
        return userWithData;
    });
    fs.writeFileSync('./dummyData/users.json', JSON.stringify(users, null, 2), 'utf8');
}

// Important

function generateFolder(files) {
    const folder = {};
    folder.id = generateHash();
    folder.projectId = projectId;
    const tripleBools = generateTripleBools();
    folder.networks = {
        ethereum: tripleBools[0],
        harmony: tripleBools[1],
        polkadot: tripleBools[2]
    };
    folder.files = [];
    while (folder.files.length < files) {
        const file = {
            fileName: `${createFileName()}.${generateExtension()}`,
            hash: generateHash(),
            folder: folder.id
        }
        folder.files.push(file);
    }
    return folder;
}

function generateCreatedBy() {
    const API = {
        createdBy: 'API',
        identifier: apiKeys[Math.floor(Math.random() * (1 - 0))]
    };
    const user = {
        createdBy: 'user',
        identifier: users[Math.floor(Math.random() * (users.length - 0))].username
    };
    const choices = [API, user];
    return choices[Math.floor(Math.random() * (2 - 0))];
}

function generateStatusAndMessage() {
    const completed = { status: 'completed', message: '' };
    const failed = { status: 'failed', message: 'Error message' };

    // Out of 25 runs, weighted rates
    const completedWeight = 24;
    const failedWeight = 1;

    const statusArr = [];

    for (let i = 1; i <= completedWeight; i++) {
        statusArr.push(completed);
    }
    for (let i = 1; i <= failedWeight; i++) {
        statusArr.push(failed);
    }

    const shuffledStatusArr = shuffle(statusArr);
    const randomIndex = Math.floor(Math.random() * (24 - 0));
    return shuffledStatusArr[randomIndex];
}

function generateDate() {
    const now = new Date();
    const backThen = new Date(now);
    backThen.setDate(backThen.getDate() - 365);
    return new Date(backThen.getTime() + Math.random() * (now.getTime() - backThen.getTime()));
}

function generateNetworkDetails(network, status, date, createdBy) {
    const networkObject = {};
    networkObject.contract = contracts[network];
    networkObject.tx = '';
    networkObject.status = status.status;
    networkObject.message = status.message;
    networkObject.date = date;
    networkObject.createdBy = createdBy;
    return networkObject;
}

function generateFile(foldersArr, file) {
    const generatedFile = {};
    generatedFile.fileName = file.fileName;
    generatedFile.hash = file.hash;
    generatedFile.folder = file.folder;
    const createdBy = generateCreatedBy();
    const date = generateDate();
    const networks = foldersArr.find(f => f.id === generatedFile.folder).networks;
    if (networks.ethereum) generatedFile.ethereum = generateNetworkDetails('ethereum', generateStatusAndMessage(), date, createdBy);
    if (networks.harmony) generatedFile.harmony = generateNetworkDetails('harmony', generateStatusAndMessage(), date, createdBy);
    if (networks.polkadot) generatedFile.polkadot = generateNetworkDetails('polkadot', generateStatusAndMessage(), date, createdBy);
    return generatedFile;
}

function generateDateDelay(date) {
    const totalWeight = 100;
    const delays = [
        { value: .05, weight: 40 },
        { value: .1, weight: 25 },
        { value: .2, weight: 15 },
        { value: .3, weight: 10 },
        { value: .5, weight: 6 },
        { value: .75, weight: 3 },
        { value: 1, weight: 1 }
    ];
    const delaysArr = delays.map(delay => {
        return Array.apply(null, Array(delay.weight)).map(() => {
            return delay.value;
        });
    }).flat();
    const shuffledArr = shuffle(delaysArr);
    const randomIndex = Math.floor(Math.random() * ((totalWeight - 1) - 0));
    const delay = shuffledArr[randomIndex];
    const delayed = new Date(date);
    delayed.addHours(delay);
    return delayed;
}

function generateLog(generatedFile) {
    const levels = { 
        'failed': 'error',
        'in progress': 'info',
        'completed': 'success'
    };
    const fileLogs = [];
    if (generatedFile.ethereum) {
        const initLog = {};
        initLog.level = 'info';
        initLog.status = 'in progress';
        initLog.message = '';
        initLog.network = 'ethereum';
        initLog.fileName = generatedFile.fileName;
        initLog.hash = generatedFile.hash;
        initLog.date = generatedFile.ethereum.date;
        fileLogs.push(initLog);

        const postLog = {};
        postLog.level = levels[generatedFile.ethereum.status];
        postLog.status = generatedFile.ethereum.status;
        postLog.message = generatedFile.ethereum.message;
        postLog.network = 'ethereum';
        postLog.fileName = generatedFile.fileName;
        postLog.hash = generatedFile.hash;
        postLog.date = generateDateDelay(generatedFile.ethereum.date);
        fileLogs.push(postLog);
    }
    if (generatedFile.harmony) {
        const initLog = {};
        initLog.level = 'info';
        initLog.status = 'in progress';
        initLog.message = '';
        initLog.network = 'harmony';
        initLog.fileName = generatedFile.fileName;
        initLog.hash = generatedFile.hash;
        initLog.date = generatedFile.harmony.date;
        fileLogs.push(initLog);

        const postLog = {};
        postLog.level = levels[generatedFile.harmony.status];
        postLog.status = generatedFile.harmony.status;
        postLog.message = generatedFile.harmony.message;
        postLog.network = 'harmony';
        postLog.fileName = generatedFile.fileName;
        postLog.hash = generatedFile.hash;
        postLog.date = generateDateDelay(generatedFile.harmony.date);
        fileLogs.push(postLog);
    }
    if (generatedFile.polkadot) {
        const initLog = {};
        initLog.level = 'info';
        initLog.status = 'in progress';
        initLog.message = '';
        initLog.network = 'polkadot';
        initLog.fileName = generatedFile.fileName;
        initLog.hash = generatedFile.hash;
        initLog.date = generatedFile.polkadot.date;
        fileLogs.push(initLog);

        const postLog = {};
        postLog.level = levels[generatedFile.polkadot.status];
        postLog.status = generatedFile.polkadot.status;
        postLog.message = generatedFile.polkadot.message;
        postLog.network = 'polkadot';
        postLog.fileName = generatedFile.fileName;
        postLog.hash = generatedFile.hash;
        postLog.date = generateDateDelay(generatedFile.polkadot.date);
        fileLogs.push(postLog);
    }
    return fileLogs;
}

function generateData(files = 0, folders = 0) {
    const randomFolderFileCountArr = folders === 1 ? [files] : generateRandomSplit(files, folders);
    const foldersArr = [];
    for (let i = 0; i < randomFolderFileCountArr.length; i++) {
        const folderFileCount = randomFolderFileCountArr[i];
        const folder = generateFolder(folderFileCount);
        foldersArr.push(folder);
    }
    fs.writeFileSync('./dummyData/folders.json', JSON.stringify(foldersArr, null, 2), 'utf8');
    const allFiles = foldersArr.map(folder => folder.files).flat();
    const filesArr = [];
    for (let i = 0; i < allFiles.length; i++) {
        const file = allFiles[i];
        const generatedFile = generateFile(foldersArr, file);
        filesArr.push(generatedFile);
    }
    let logsArr = [];
    fs.writeFileSync('./dummyData/files.json', JSON.stringify(filesArr, null, 2), 'utf8');
    for (let i = 0; i < filesArr.length; i++) {
        const file = filesArr[i];
        const log = generateLog(file);
        logsArr.push(log);
    }
    logsArr = logsArr.flat();
    fs.writeFileSync('./dummyData/logs.json', JSON.stringify(logsArr, null, 2), 'utf8');
}

generateUsers(args.u);
generateData(args.r, args.f);
