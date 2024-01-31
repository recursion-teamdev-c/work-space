//0からn-1までのランダムな整数値を返す
function getRandomNumber(n) {
    return Math.floor(Math.random() * n);
}


class Omikuji {
    constructor() {
        this.fortune = this.getFortune(getRandomNumber(5)); // string
        this.description = this.getDescription(this.fortune); // string
        this.fileNameOfImage = this.getFileNameOfImage(this.fortune); // string
        this.audio = this.getAudioOfFortune(this.fortune); // Audio
        this.luckyLang = this.getLuckyLang(getRandomNumber(8)); // string
        this.luckyDB = this.getLuckyDB(getRandomNumber(5)); // string
        this.luckyEditor = this.getLuckyEditor(getRandomNumber(5)); // string
    }


    getFortune(number) {
        let fortune_list = ["大吉", "中吉", "小吉", "末吉", "凶"];
        return fortune_list[number];
    }

    getDescription(fortune) {
        let description = '';
    //discriptionに説明を代入
        switch (fortune) {
        case '大吉':
            description =
            'GitHub Sponsors を通じて太っ腹なスポンサーがつきます。これであなたの OSS 開発は安泰です!!';
            break;
            break;
        case '中吉':
            description =
            'git でコンフリクトが発生します!! が、今回は上手く解消できるでしょう。今回は・・・';
            break;
        case '小吉':
            description =
            '開発の要件定義が綿飴のようにふわっふわです。手遅れにならないうちに手を打っておくのが吉。';
            break;
        case '末吉':
            description =
            'リリース直前に致命的なバグが見つかるでしょう。お泊まりの準備をして出社するのが吉。';
            break;
        case '凶':
            description =
            '前任者から引き継いだコードがスパゲティ状態です。残念ながらあなたの力ではどうにもならないので、せめて自分はこんなコードを書かないように今後の糧にしましょう。';
            break;
        }
        return description;
    }

    getFileNameOfImage(fortune) {
        let fileNameOfImage = '';
        //イメージのファイルパスを代入
        switch (fortune) {
        case '大吉':
            fileNameOfImage = 'futoppara.png';
            break;
        case '中吉':
            fileNameOfImage = 'pose_anshin_man.png';
            break;
        case '小吉':
            fileNameOfImage = 'wataame.png';
            break;
        case '末吉':
            fileNameOfImage = 'sleep_cry_man.png';
            break;
        case '凶':
            fileNameOfImage = 'food_spaghetti.png';
            break;
        }

        return 'image/omikuji/' + fileNameOfImage;
    }

    getAudioOfFortune(fortune) {
        //audioのファイルパスを代入
        let fileNameOfAudio = '';
        switch (fortune) {
            case '大吉':
                fileNameOfAudio = 'daikichi.mp3';
                break;
            case '中吉':
                fileNameOfAudio = 'chukichi.mp3';
                break;
            case '小吉':
                fileNameOfAudio = 'shokichi.mp3';
                break;
            case '末吉':
                fileNameOfAudio = 'suekichi.mp3';
                break;
            case '凶':
                fileNameOfAudio = 'kyou.mp3';
                break;
            }
    
            return new Audio('./audio/' + fileNameOfAudio);
    }

    getLuckyLang(number) {
        let luckyLang = '';
        //おすすめ言語を代入
        switch (number) {
        case 0:
            luckyLang = 'C++';
            break;
        case 1:
            luckyLang = 'Java';
            break;
        case 2:
            luckyLang = 'Python';
            break;
        case 3:
            luckyLang = 'PHP';
            break;
        case 4:
            luckyLang = 'TypeScript';
            break;
        case 5:
            luckyLang = 'Ruby';
            break;
        case 6:
            luckyLang = 'C♯';
            break;
        default:
            luckyLang = 'JavaScript';
            break;
        }
        return luckyLang;
    }

    getLuckyDB(number) {
        let luckyDB = '';
        //おすすめデータベースを代入
        switch (number) {
        case 0:
            luckyDB = 'Oracle Database';
            break;
        case 1:
            luckyDB = 'SQL Server';
            break;
        case 2:
            luckyDB = 'DB2';
            break;
        case 3:
            luckyDB = 'PostgreSQL';
            break;
        default:
            luckyDB = 'MySQL';
            break;
        }

        return luckyDB;
    }

    getLuckyEditor(number) {
        let luckyEditor = '';
        //おすすめエディター
        switch (number) {
        case 0:
            luckyEditor = 'Emacs';
            break;
        case 1:
            luckyEditor = 'Vim';
            break;
        case 2:
            luckyEditor = 'Atom';
            break;
        case 3:
            luckyEditor = 'nano';
            break;
        default:
            luckyEditor = 'Visual Studio Code';
            break;
        }

        return luckyEditor;
    }
}

//noneとblockを切り替える
function displayNone(ele) {
    ele.classList.remove('d-block');
    ele.classList.add('d-none');
}

function displayBlock(ele) {
    ele.classList.remove('d-none');
    ele.classList.add('d-block');
}

//トップページとおみくじページのidを連想配列で保持
const config = {
    topPage: document.getElementById('top-page'),
    omikujiPage: document.getElementById('omikuji-page'),
};

//topPageをnone, omikujiPageをblockに切り替える。omikujiPageには作成したドキュメントを付け加える
function drawOmikuji() {
    let omikuji = new Omikuji();
    displayNone(config.topPage);
    displayBlock(config.omikujiPage);
    fortune.innerHTML = omikuji.fortune;
    omikuji.audio.play()
    description.innerHTML = omikuji.description;
    luckyLang.innerHTML = omikuji.luckyLang;
    luckyDB.innerHTML = omikuji.luckyDB;
    luckyEditor.innerHTML = omikuji.luckyEditor;
    fileNameOfImage.src = omikuji.fileNameOfImage;
    document.getElementById("xpost").setAttribute("data-text", `おみくじ結果は${omikuji.fortune}でした。${omikuji.description}`);
}
 
//drawOmikujiと逆の操作
function backToTopPage() {
    displayNone(config.omikujiPage);
    displayBlock(config.topPage);
}



  