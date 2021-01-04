// numberToWords
// VAL numberToWordsRus

// !function(){"use strict";var e="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||this,t=9007199254740991;
// function f(e){return!("number"!=typeof e||e!=e||e===1/0||e===-1/0)}
// function l(e){return"number"==typeof e&&Math.abs(e)<=t}
// // числа от 1 до 12
// var n=/(hundred|thousand|(m|b|tr|quadr)illion)$/,r=/teen$/,o=/y$/,i=/(zero|один|два|три|четрые|пять|шесть|семь|восемь|девять|десять|одинаддцать|двенадцать)$/,

// s={zero:"zeroth",one:"first",two:"second",three:"third",four:"fourth",five:"fifth",six:"sixth",seven:"seventh",eight:"eighth",nine:"ninth",ten:"tenth",eleven:"eleventh",twelve:"twelfth"};
// function h(e){return n.test(e)||r.test(e)?e+"th":o.test(e)?e.replace(o,"ieth"):i.test(e)?e.replace(i,a):e}function a(e,t){return s[t]}var u=10,d=100,p=1e3,v=1e6,b=1e9,y=1e12,c=1e15,g=9007199254740992,
// // сотни. Сто Двести до девятндцати
// m=["zero","сто","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],
// // десятки десять двадцать до девяносто
// w=["zero","ten","двадцать","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
// function x(e,t){var n,r=parseInt(e,10);if(!f(r))throw new TypeError("Not a finite number: "+e+" ("+typeof e+")");if(!l(r))throw new RangeError("Input is not a safe number, it’s either too large or too small.");
// return n=function e(t){var n,r,o=arguments[1];if(0===t)return o?o.join(" ").replace(/,$/,""):"zero";o||(o=[]);t<0&&(o.push("minus"),
// t=Math.abs(t));t<20?(n=0,r=m[t]):t<d?(n=t%u,r=w[Math.floor(t/u)],n&&(r+="-"+m[n],n=0)):t<p?(n=t%d,r=e(Math.floor(t/d))+" hundred"):t<v?(n=t%p,r=e(Math.floor(t/p))+" thousand,"):
// t<b?(n=t%v,r=e(Math.floor(t/v))+" million,"):t<y?(n=t%b,r=e(Math.floor(t/b))+" billion,"):t<c?(n=t%y,r=e(Math.floor(t/y))+" trillion,"):t<=g&&(n=t%c,r=e(Math.floor(t/c))+" quadrillion,");
// o.push(r);return e(n,o)}(r),t?h(n):n}var M={toOrdinal:function(e){var t=parseInt(e,10);if(!f(t))throw new 
//     TypeError("Not a finite number: "+e+" ("+typeof e+")");if(!l(t))throw new RangeError("Input is not a safe number, it’s either too large or too small.");
//     var n=String(t),r=Math.abs(t%100),o=11<=r&&r<=13,i=n.charAt(n.length-1);return n+(o?"th":"1"===i?"st":"2"===i?"nd":"3"===i?"rd":"th")},
//     toWords:x,toWordsOrdinal:function(e){return h(x(e))}};"undefined"!=typeof exports?
//     ("undefined"!=typeof module&&module.exports&&(exports=module.exports=M),exports.numberToWords=M):e.numberToWords=M}();

// // VAL numberToWordsEng

// !function(){"use strict";var e="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||this,t=9007199254740991;
// function f(e){return!("number"!=typeof e||e!=e||e===1/0||e===-1/0)}function l(e){return"number"==typeof e&&Math.abs(e)<=t}var 
// n=/(hundred|thousand|(m|b|tr|quadr)illion)$/,r=/teen$/,o=/y$/,i=/(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/,
// s={zero:"zeroth",one:"first",two:"second",three:"third",four:"fourth",five:"fifth",six:"sixth",seven:"seventh",eight:"eighth",nine:"ninth",ten:"tenth",eleven:"eleventh",twelve:"twelfth"};
// function h(e){return n.test(e)||r.test(e)?e+"th":o.test(e)?e.replace(o,"ieth"):i.test(e)?e.replace(i,a):e}function a(e,t){return s[t]}var u=10,d=100,p=1e3,v=1e6,b=1e9,y=1e12,c=1e15,g=9007199254740992,
// m=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],
// w=["zero","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
// function x(e,t){var n,r=parseInt(e,10);if(!f(r))throw new TypeError("Not a finite number: "+e+" ("+typeof e+")");if(!l(r))throw new RangeError("Input is not a safe number, it’s either too large or too small.");
// return n=function e(t){var n,r,o=arguments[1];if(0===t)return o?o.join(" ").replace(/,$/,""):"zero";o||(o=[]);t<0&&(o.push("minus"),
// t=Math.abs(t));t<20?(n=0,r=m[t]):t<d?(n=t%u,r=w[Math.floor(t/u)],n&&(r+="-"+m[n],n=0)):t<p?(n=t%d,r=e(Math.floor(t/d))+" hundred"):t<v?(n=t%p,r=e(Math.floor(t/p))+" thousand,"):
// t<b?(n=t%v,r=e(Math.floor(t/v))+" million,"):t<y?(n=t%b,r=e(Math.floor(t/b))+" billion,"):t<c?(n=t%y,r=e(Math.floor(t/y))+" trillion,"):t<=g&&(n=t%c,r=e(Math.floor(t/c))+" quadrillion,");
// o.push(r);return e(n,o)}(r),t?h(n):n}var M={toOrdinal:function(e){var t=parseInt(e,10);if(!f(t))throw new 
//     TypeError("Not a finite number: "+e+" ("+typeof e+")");if(!l(t))throw new RangeError("Input is not a safe number, it’s either too large or too small.");
//     var n=String(t),r=Math.abs(t%100),o=11<=r&&r<=13,i=n.charAt(n.length-1);return n+(o?"th":"1"===i?"st":"2"===i?"nd":"3"===i?"rd":"th")},
//     toWords:x,toWordsOrdinal:function(e){return h(x(e))}};"undefined"!=typeof exports?
//     ("undefined"!=typeof module&&module.exports&&(exports=module.exports=M),exports.numberToWords=M):e.numberToWords=M}();

// VAL numberToWordsRus
function intToWords(int, names) {
	var result = [];
	if (typeof int === 'number') {
		int = int.toString();
	} else if (typeof int !== 'string') {
		int = '';
	}
	if (!(names instanceof Array) || (typeof names[0] !== 'string') || (typeof names[1] !== 'string') || (typeof names[2] !== 'string')) {
		names = null;
	}
	if (int.length && !/[^0-9]/.test(int)) {
		var selectName = function (number, names) {
			return names[((parseInt(number) % 100 > 4) && (parseInt(number) % 100 < 20)) ? 2 : [2, 0, 1, 1, 1, 2][Math.min(parseInt(number) % 10, 5)]];
		};
		var name = null;
		var zero = 'ноль';
		if (int === '0') {
			result.push(zero);
		} else {
			var from0To2 = [zero, 'одна', 'две'];
			var from0To19 = [
				zero, 'один', 'два', 'три', 'четыре',
				'пять', 'шесть', 'семь', 'восемь', 'девять',
				'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать',
				'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'
			];
			var tens = [
				'десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят',
				'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'
			];
			var hundreds = [
				'сто', 'двести', 'триста', 'четыреста', 'пятьсот',
				'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'
			];
			var thousands = [
				['тысяча', 'тысячи', 'тысяч'],
				['миллион', 'миллиона', 'миллионов'],
				['миллиард', 'миллиарда', 'миллиардов'],
				['триллион', 'триллиона', 'триллионов'],
				['квадриллион', 'квадриллиона', 'квадриллионов'],
				['квинтиллион', 'квинтиллиона', 'квинтиллионов'],
				['секстиллион', 'секстиллиона', 'секстиллионов'],
				['септиллион', 'септиллиона', 'септиллионов'],
				['октиллион', 'октиллиона', 'октиллионов'],
				['нониллион', 'нониллиона', 'нониллионов'],
				['дециллион', 'дециллиона', 'дециллионов']
			];
			var unknown = '{неизвестно}';
			var numberParts = int.replace(/(?=(\d{3})+(?!\d))/g, ' ').split(' ');
			var i = numberParts.length - 1;
			for (var j in numberParts) {
				var numberPart = parseInt(numberParts[j]);
				if (numberPart) {
					var numberPartResult = [];
					var hundred = Math.floor(numberPart / 100);
					if (hundred) {
						numberPartResult.push(hundreds[hundred - 1]);
						numberPart -= hundred * 100;
					}
					if (numberPart > 19) {
						var ten = Math.floor(numberPart / 10);
						numberPartResult.push(tens[ten - 1]);
						numberPart -= ten * 10;
					}
					if (numberPart) {
						numberPartResult.push(((i === 1) && ([1, 2].indexOf(numberPart) !== -1)) ? from0To2[numberPart] : from0To19[numberPart]);
					}
					if (thousands[i - 1] !== undefined) {
						numberPartResult.push(selectName(numberParts[j], thousands[i - 1]));
					} else if (i !== 0) {
						numberPartResult.push(unknown);
					} else if (names) {
						name = selectName(numberParts[j], names);
					}
					result.push(numberPartResult.join(' '));
				}
				i--;
			}
			if (!result.length) {
				result.push(zero);
			}
		}
		if (!name && names) {
			name = selectName(0, names);
		}
		if (name) {
			result.push(name);
		}
	}
	return result.join(' ');
}