function wordTrainerController($scope) {
  $scope.katakana = [
    {symbol: 'ア', latin: "a", etymology:"Simplified in the Heian period from the man'yōgana kanji 阿, taken from the left part of the character. This is one of many katakana characters that were formed by writing only the first few strokes of a kanji and omitting the rest."},
    {symbol:'イ', latin: "i", etymology:"Simplified in the Heian period from the man'yōgana kanji 伊, taken from the left part of the character."},
    {symbol:'ウ',latin:"u", etymology: "Simplified in the Heian period from the man'yōgana kanji 宇, taken from the top part of the character."},
    {symbol:'ヴ',latin:"vu", etymology: "The katakana character ウ (u) with a dakuten (゛)."},
    {symbol:'エ',latin:"e", etymology: "Simplified in the Heian period from the man'yōgana kanji 江, taken from the right part of the character."},
    {symbol:'オ',latin:"o", etymology: "Simplified in the Heian period from the man'yōgana kanji 於, taken from the left part of the character."},
    {symbol:'カ',latin:"ka", etymology: "Simplified in the Heian period from the man'yōgana kanji 加. Cognate to hiragana か."},
    {symbol:'ガ',latin:"ga", etymology: "The katakana character カ (ka) with a dakuten (゛)."},
   {symbol:'キ',latin:"ki", etymology: "Simplified in the Heian period from the man'yōgana kanji 機 or 幾."},
   {symbol:'ギ',latin:"gi", etymology: "The katakana character キ (ki) with a dakuten (゛)."},
   {symbol:'ク',latin:"ku", etymology: "Simplified in the Heian period from the man'yōgana kanji 久."},
   {symbol:'グ',latin:"gu", etymology: "The katakana character ク (ku) with a dakuten (゛)."},
   {symbol:'ケ',latin:"ke", etymology: "Simplified in the Heian period from the man'yōgana kanji 介."},
   {symbol:'ゲ',latin:"ge", etymology: "The katakana character ケ (ke) with a dakuten (゛)."},
   {symbol:'コ',latin:"ko", etymology: "Simplified in the Heian period from the man'yōgana kanji 己."},
   {symbol:'ゴ',latin:"go", etymology: "The katakana character コ (ko) with a dakuten (゛)."},
   {symbol:'サ',latin:"sa", etymology: "Simplified in the Heian period from the man'yōgana kanji 散."},
   {symbol:'ザ',latin:"za", etymology: "The katakana character サ (sa) with a dakuten (゛)."},
   {symbol:'シ',latin:"shi", etymology: "Simplified in the Heian period from the man'yōgana kanji 之."},
   {symbol:'ジ',latin:"ji", etymology: "The katakana character シ (shi) with a dakuten (゛)."},
   {symbol:'ス',latin:"su", etymology: "Simplified in the Heian period from the man'yōgana kanji 須."},
   {symbol:'ズ',latin:"zu", etymology: "The katakana character ス (su) with a dakuten (゛)."},
   {symbol:'セ',latin:"se", etymology: "Simplified in the Heian period from the man'yōgana kanji 世."},
   {symbol:'ゼ',latin:"ze", etymology: "The katakana character セ (se) with a dakuten (゛)."},
   {symbol:'ソ',latin:"so", etymology: "Simplified in the Heian period from the man'yōgana kanji 曽."},
   {symbol:'ゾ',latin:"zo", etymology: "The katakana character ソ (so) with a dakuten (゛)."},
   {symbol:'タ',latin:"ta", etymology: "Simplified in the Heian period from the man'yōgana kanji 多."},
   {symbol:'ダ',latin:"da", etymology: "The katakana character タ (ta) with a dakuten (゛)."},
   {symbol:'チ',latin:"chi/ti", etymology: "Simplified in the Heian period from the man'yōgana kanji 千."},
   {symbol:'ヂ',latin:"ji/di", etymology: "The katakana character チ (chi) with a dakuten (゛)."},
   {symbol:'ツ',latin:"tsu", etymology: "Simplified in the Heian period from the man'yōgana kanji 州 or 川."},
   {symbol:'ヅ',latin:"zu", etymology: "The katakana character ツ (tsu) with a dakuten (゛)."},
   {symbol:'テ',latin:"te", etymology: "Simplified in the Heian period from the man'yōgana kanji 天."},
   {symbol:'デ',latin:"de", etymology: "The katakana character テ (te) with a dakuten (゛)."},
   {symbol:'ト',latin:"to", etymology: "Simplified in the Heian period from the man'yōgana kanji 止."},
   {symbol:'ド',latin:"do", etymology: "The katakana character ト (to) with a dakuten (゛)."},
   {symbol:'ナ',latin:"na", etymology: "Simplified in the Heian period from the man'yōgana kanji 奈."},
   {symbol:'ニ',latin:"ni", etymology: "Simplified in the Heian period from the man'yōgana kanji 仁 or 二."},
   {symbol:'ヌ',latin:"nu", etymology: "Simplified in the Heian period from the man'yōgana kanji 奴."},
   {symbol:'ネ',latin:"ne", etymology: "Simplified in the Heian period from the man'yōgana kanji 祢."},
   {symbol:'ノ',latin:"no", etymology: "Simplified in the Heian period from the man'yōgana kanji 乃."},
   {symbol:'ハ',latin:"ha", etymology: "Simplified in the Heian period from the man'yōgana kanji 八."},
   {symbol:'バ',latin:"ba", etymology: "The katakana character ハ (ha) with a dakuten (゛)."},
   {symbol:'パ',latin:"pa", etymology: "The katakana character ハ (ha) with a handakuten (ﾟ)."},
   {symbol:'ヒ',latin:"hi", etymology: "Simplified in the Heian period from the man'yōgana kanji 比."},
   {symbol:'ビ',latin:"bi", etymology: "The katakana character ヒ (hi) with a dakuten (゛)."},
   {symbol:'ピ',latin:"pi", etymology: "The katakana character ヒ (hi) with a handakuten (ﾟ)."},
   {symbol:'フ',latin:"hu/fu", etymology: "Simplified in the Heian period from the man'yōgana kanji 不."},
   {symbol:'ブ',latin:"bu", etymology: "The katakana character フ (fu) with a dakuten (゛)."},
   {symbol:'プ',latin:"pu", etymology: "The katakana character フ (fu) with a handakuten (ﾟ)."},
   {symbol:'ヘ',latin:"he", etymology: "Simplified in the Heian period from the man'yōgana kanji 部."},
   {symbol:'ベ',latin:"be", etymology: "The katakana character ヘ (he) with a dakuten (゛)."},
   {symbol:'ペ',latin:"pe", etymology: "The katakana character ヘ (he) with a handakuten (ﾟ)."},
   {symbol:'ホ',latin:"ho", etymology: "Simplified in the Heian period from the man'yōgana kanji 保."},
   {symbol:'ボ',latin:"bo", etymology: "The katakana character ホ (ho) with a dakuten (゛)."},
   {symbol:'ポ',latin:"po", etymology: "The katakana character ホ (ho) with a handakuten (ﾟ)."},
   {symbol:'マ',latin:"ma", etymology: "Simplified in the Heian period from the man'yōgana kanji 末."},
   {symbol:'ミ',latin:"mi", etymology: "Simplified in the Heian period from the man'yōgana kanji 三."},
   {symbol:'ム',latin:"mu", etymology: "Simplified in the Heian period from the man'yōgana kanji 牟."},
   {symbol:'メ',latin:"me", etymology: "Simplified in the Heian period from the man'yōgana kanji 女."},
   {symbol:'モ',latin:"mo", etymology: "Simplified in the Heian period from the man'yōgana kanji 毛."},
   {symbol:'ヤ',latin:"ya", etymology: "Simplified in the Heian period from the man'yōgana kanji 也."},
   {symbol:'ユ',latin:"yu", etymology: "Simplified in the Heian period from the man'yōgana kanji 由."},
   {symbol:'ヨ',latin:"yo", etymology: "Simplified in the Heian period from the man'yōgana kanji 與."},
   {symbol:'ラ',latin:"ra", etymology: "Simplified in the Heian period from the man'yōgana kanji 良."},
   {symbol:'リ',latin:"ri", etymology: "Simplified in the Heian period from the man'yōgana kanji 利."},
   {symbol:'ル',latin:"ru", etymology: "Simplified in the Heian period from the man'yōgana kanji 流."},
   {symbol:'レ',latin:"re", etymology: "Simplified in the Heian period from the man'yōgana kanji 禮. Compare cognate hiragana れ (more cursive), and shinjitai kanji 礼 (similar but less radical)."},
   {symbol:'ロ',latin:"ro", etymology: "Simplified in the Heian period from the man'yōgana kanji 呂."},
   {symbol:'ワ',latin:"wa", etymology: "Simplified in the Heian period from the man'yōgana kanji 和."},
   {symbol:'ヰ',latin:"wi", etymology: "Simplified in the Heian period from the man'yōgana kanji 井."},
   {symbol:'ヱ',latin:"we", etymology: "Simplified in the Heian period from the man'yōgana kanji 恵."},
   {symbol:'ヲ',latin:"wo", etymology: "Simplified in the Heian period from the man'yōgana kanji 乎."},
   {symbol:'ン',latin:"n", etymology: "Simplified in the Heian period from the man'yōgana kanji 尓."},
   {symbol:'ー',latin:"Long", etymology: "This mark appears as a horizontal line in horizontal writing (横書き) and as a vertical line in vertical writing (縦書き). The Japanese names are 長音符 (chōonpu), 音引き (onbiki) or 棒引き (bōbiki)"},
   {symbol:'ヽ',latin:"Iterate", etymology: "ヽ indicates that the previous character should be repeated, as in サヽキ (Sasaki)"},
   {symbol:'ヾ',latin:"Iterate", etymology: "The previous katakana shouls be repeated, but with a dakuten (voice mark). As in サヾエ (Sazae)"},
  ];

  $scope.hiragana = [
    {symbol: 'あ', latin: "a", etymology:"The short form of 'are' (kanji that looks like this: 我. Ideogrammic compound (會意): 扌 (“hand”) + 戈 (“halberd, lance”). Means 'to take up arms in self-defence')."},
    {symbol: 'い', latin: "i", etymology:"Likely cognate with Korean 이 (i). Derived in the Heian period from writing the man'yōgana kanji 以 in the cursive sōsho style."},
    {symbol: 'う', latin: "u", etymology:"Derived in the Heian period from writing the man'yōgana kan'u 宇 in the cursive sōsho style."},
    {symbol: 'ゔ', latin: "vu", etymology:"The hiragana character う (u) with a dakuten (゛)."},
    {symbol: 'え', latin: "e", etymology:"Derived in the Heian period from writing the man'yōgana kanji 衣 in the cursive sōsho style."},
    {symbol: 'お', latin: "o", etymology:"Derived in the Heian period from writing the man'yōgana kanji 於 in the cursive sōsho style."},
    {symbol: 'か', latin: "ka", etymology:"Derived in the Heian period from writing the man'yōgana kanji 加 in the cursive sōsho style."},
    {symbol: 'が', latin: "ga", etymology:"The hiragana character か (ka) with a dakuten (゛)."},
    {symbol: 'き', latin: "ki", etymology:"Derived in the Heian period from writing the man'yōgana kanji 機 or 幾 in the cursive sōsho style."},
    {symbol: 'ぎ', latin: "gi", etymology:"The hiragana character き (ki) with a dakuten (゛)."},
    {symbol: 'く', latin: "ku", etymology:"Derived in the Heian period from writing the man'yōgana kanji 久 in the cursive sōsho style."},
    {symbol: 'ぐ', latin: "gu", etymology:"The hiragana character く (ku) with a dakuten (゛)."},
    {symbol: 'け', latin: "ke", etymology:"Derived in the Heian period from writing the man'yōgana kanji 計 in the cursive sōsho style."},
    {symbol: 'げ', latin: "ge", etymology:"The hiragana character け (ke) with a dakuten (゛)."},
    {symbol: 'こ', latin: "ko", etymology:"Derived in the Heian period from writing the man'yōgana kanji 己 in the cursive sōsho style."},
    {symbol: 'ご', latin: "go", etymology:"The hiragana character こ (ko) with a dakuten (゛)."},
    {symbol: 'さ', latin: "sa", etymology:"Cognate with shi (“id”). Derived in the Heian period from writing the man'yōgana kanji 左 in the cursive sōsho style."},
    {symbol: 'ざ', latin: "za", etymology:"The hiragana character さ (sa) with a dakuten (゛)."},
    {symbol: 'し', latin: "shi", etymology:"Cognate with demonstrative pronoun so. Derived in the Heian period from writing the man'yōgana kanji 之 in the cursive sōsho style."},
    {symbol: 'じ', latin: "zi", etymology:"The hiragana character し (shi) with a dakuten (゛)."},
    {symbol: 'す', latin: "su", etymology:"Derived in the Heian period from writing the man'yōgana kanji 寸 in the cursive sōsho style."},
    {symbol: 'ず', latin: "zu", etymology:"The hiragana character す (su) with a dakuten (゛)."},
    {symbol: 'せ', latin: "se", etymology:"Derived in the Heian period from writing the man'yōgana kanji 世 in the cursive sōsho style."},
    {symbol: 'ぜ', latin: "ze", etymology:"The hiragana character せ (se) with a dakuten (゛). Appears in the Edo Period as alteration from older zoe, itself likely rendaku (連濁) applied to the stem soe of verb 添える, 副える (soeru, “to add or attach to something else”). See also そえに (soe ni, “what's more, furthermore, in addition”), さえ (sae, “also”)."},
    {symbol: 'そ', latin: "so", etymology:"Derived in the Heian period from writing the man'yōgana kanji 曽 in the cursive sōsho style."},
    {symbol: 'ぞ', latin: "zo", etymology:"The hiragana character そ (so) with a dakuten (゛)."},
    {symbol: 'た', latin: "ta", etymology:"Short form of tare (“id”). Derived in the Heian period from writing the man'yōgana kanji 太 in the cursive sōsho style."},
    {symbol: 'だ', latin: "da", etymology:"The hiragana character た (ta) with a dakuten (゛)."},
    {symbol: 'ち', latin: "chi", etymology:"Derived in the Heian period from writing the man'yōgana kanji 知 in the cursive sōsho style."},
    {symbol: 'ぢ', latin: "di", etymology:"The hiragana character ち (chi) with a dakuten (゛)."},
    {symbol: 'つ', latin: "tsu", etymology:"Derived in the Heian period from writing the man'yōgana kanji 川 in the cursive sōsho style."},
    {symbol: 'づ', latin: "du", etymology:"The hiragana character つ (tsu) with a dakuten (゛)."},
    {symbol: 'て', latin: "te", etymology:"Derived in the Heian period from writing the man'yōgana kanji 天 in the cursive sōsho style."},
    {symbol: 'で', latin: "de", etymology:"The hiragana character て (te) with a dakuten (゛). Originally an alteration of にて (ni te), later treated as a conjugation of the copula だ (da)"},
    {symbol: 'と', latin: "to", etymology:"Derived in the Heian period from writing the man'yōgana kanji 止 in the cursive sōsho style."},
    {symbol: 'ど', latin: "do", etymology:"The hiragana character と (to) with a dakuten (゛). "},
    {symbol: 'な', latin: "na", etymology:"Derived in the Heian period from writing the 万葉仮名 (man'yōgana) kanji 奈 in the cursive 草書 (sōsho) style. Probably derived from mild emphatic interjection and sentence-final particle ね, itself from Old Japanese, indicating a general sense of admiration or consideration, or hope that the preceding statement comes to pass."},
    {symbol: 'に', latin: "ni", etymology:"Derived in the Heian period from writing the man'yōgana kanji 仁 in the cursive sōsho style."},
    {symbol: 'ぬ', latin: "nu", etymology:"Derived in the Heian period from writing the man'yōgana kanji 奴 in the cursive sōsho style."},
    {symbol: 'ね', latin: "ne", etymology:"Derived in the Heian period from writing the man'yōgana kanji 祢 in the cursive sōsho style."},
    {symbol: 'の', latin: "no", etymology:"Derived in the Heian period from writing the man'yōgana kanji 乃 in the cursive sōsho style."},
    {symbol: 'は', latin: "ha", etymology:"Derived in the Heian period from writing the man'yōgana kanji 波 in the cursive sōsho style."},
    {symbol: 'ば', latin: "ba", etymology:"The hiragana character は (ha) with a dakuten (゛)."},
    {symbol: 'ぱ', latin: "pa", etymology:"The hiragana character は (ha) with a handakuten (ﾟ)."},
    {symbol: 'ひ', latin: "hi", etymology:"Derived in the Heian period from writing the man'yōgana kanji 比 in the cursive sōsho style."},
    {symbol: 'び', latin: "bi", etymology:"The hiragana character ひ (hi) with a dakuten (゛)."},
    {symbol: 'ぴ', latin: "pi", etymology:"The hiragana character ひ (hi) with a handakuten (ﾟ)."},
    {symbol: 'ふ', latin: "hu", etymology:"Derived in the Heian period from writing the man'yōgana kanji 不 in the cursive sōsho style."},
    {symbol: 'ぶ', latin: "bu", etymology:"The hiragana character ふ (hu) with a dakuten (゛)."},
    {symbol: 'ぷ', latin: "pu", etymology:"The hiragana character ふ (fu) with a handakuten (ﾟ)."},
    {symbol: 'へ', latin: "he", etymology:"Derived in the Heian period from writing the man'yōgana kanji 部 in the cursive sōsho style."},
    {symbol: 'べ', latin: "be", etymology:"The hiragana character へ (he) with a dakuten (゛)."},
    {symbol: 'ぺ', latin: "pe", etymology:"The hiragana character へ (he) with a handakuten (ﾟ)."},
    {symbol: 'ほ', latin: "ho", etymology:"Derived in the Heian period from writing the man'yōgana kanji 保 in the cursive sōsho style."},
    {symbol: 'ぼ', latin: "bo", etymology:"The hiragana character ほ (ho) with a dakuten (゛)."},
    {symbol: 'ぽ', latin: "po", etymology:"The hiragana character ほ (ho) with a handakuten (ﾟ)."},
    {symbol: 'ま', latin: "ma", etymology:"Derived in the Heian period from writing the man'yōgana kanji 末 in the cursive sōsho style."},
    {symbol: 'み', latin: "mi", etymology:"Derived in the Heian period from writing the man'yōgana kanji 美 in the cursive sōsho style."},
    {symbol: 'む', latin: "mu", etymology:"Derived in the Heian period from writing the man'yōgana kanji 武 in the cursive sōsho style."},
    {symbol: 'め', latin: "me", etymology:"Derived in the Heian period from writing the man'yōgana kanji 女 in the cursive sōsho style."},
    {symbol: 'も', latin: "mo", etymology:"Simplified in the Heian period from the man'yōgana kanji 毛 (もう, mō), meaning hair."},
    {symbol: 'や', latin: "ya", etymology:"Derived in the Heian period from writing the man'yōgana kanji 也 in the cursive sōsho style."},
    {symbol: 'ゆ', latin: "yo", etymology:"Derived in the Heian period from writing the man'yōgana kanji 由 in the cursive sōsho style. Attaches to the irrealis form of verbs. Conjugates as a lower bigrade: ye, ye, yu, yuru, yure, -."},
    {symbol: 'よ', latin: "yo", etymology:"Derived in the Heian period from writing the man'yōgana kanji 与 in the cursive sōsho style."},
    {symbol: 'ら', latin: "ra", etymology:"Derived in the Heian period from writing the man'yōgana kanji 良 in the cursive sōsho style."},
    {symbol: 'り', latin: "ri", etymology:"Derived in the Heian period from writing the man'yōgana kanji 利 in the cursive sōsho style."},
    {symbol: 'る', latin: "ru", etymology:"Derived in the Heian period from writing the man'yōgana kanji 留 in the cursive sōsho style."},
    {symbol: 'れ', latin: "re", etymology:"Derived in the Heian period from writing the man'yōgana kanji 禮 in the cursive sōsho style. Compare cognate shinjitai kanji 礼 (similar but less radical) and katakana レ."},
    {symbol: 'ろ', latin: "ro", etymology:"Derived in the Heian period from writing the man'yōgana kanji 呂 in the cursive sōsho style."},
    {symbol: 'わ', latin: "wa", etymology:"Derived in the Heian period from writing the man'yōgana kanji 和 in the cursive sōsho style. わたしわ means 'my name is'"},
    {symbol: 'ゐ', latin: "wi", etymology:"Derived in the Heian period from writing the man'yōgana kanji 為 in the cursive sōsho style."},
    {symbol: 'ゑ', latin: "we", etymology:"Derived in the Heian period from writing the man'yōgana kanji 恵 in the cursive sōsho style."},
    {symbol: 'を', latin: "wo", etymology:"Derived in the Heian period from writing the man'yōgana kanji 遠 in the cursive sōsho style."},
    {symbol: 'ん', latin: "n", etymology:"Derived in the Heian period from writing the man'yōgana kanji 无 in the cursive sōsho style. That's when it was distinguished separately from 'mu'."},
    {symbol: 'ー', latin: "Long", etymology:"Makes the previous character last longer. がー would sound like 'gaa', while が is just a quick 'ga'. More common in カタカナ than ひらがな."},
    {symbol: 'ゝ', latin: "Iterate", etymology:"Iteration mark. The previous character is repeated. さゝき becomes Sasaki"},
    {symbol: 'ゞ', latin: "Iterate", etymology:"Hiragana voiced iteration mark, indicating that the previous hiragana character should be repeated with a voice mark applied. あひゞき (Ahibiki). This not that common anymore, though"},
    {symbol: 'ゟ', latin: "yori", etymology:"Not in common use any more, but is a short form of より."}
  ];
  $scope.theSymbol = "";
  $scope.theLatin = "かな";
  $scope.isHiragana = true;
  $scope.nextKana = "カタカナ"

  $scope.currentKana = function (input) {
      if (typeof input != "string") {return localStorage.currentKana;}

      if (input == "hiragana") {
          localStorage.currentKana = $scope.hiragana;
          return localStorage.currentKana;
      } else {
          localStorage.currentKana = $scope.katakana;
          return localStorage.currentKana;
      }
  };

  $scope.showDescription = function (letter) {
      console.log($scope.currentKana, letter);
      $scope.hideWelcomeScreen = true;
      $scope.theLatin          = letter.latin;
      $scope.theSymbol         = letter.symbol;
      $scope.theEtymology      = letter.etymology;
  };

  $scope.changeKana = function () {
      if ($scope.isHiragana) {
          $scope.showKatakana();
      } else {
          $scope.showHiragana();
      }
  };
  $scope.showKatakana = function () {
      $scope.currentKana("katakana");
      $scope.nextKana = "ひらがな"
      $scope.isKatakana = true;
      $scope.isHiragana = false;
      console.log($scope.currentKana())
  };
  $scope.showHiragana = function () {
      $scope.currentKana("hiragana");
      $scope.nextKana = "カタカナ"
      $scope.isHiragana = true;
      $scope.isKatakana = false;
      console.log($scope.currentKana())
  };
}


document.body.addEventListener('touchmove',function(e){
                               if(!$(e.target).hasClass("scrollable")) {
                               e.preventDefault();
                               }
                               });
