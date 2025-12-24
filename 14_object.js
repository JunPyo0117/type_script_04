let yuJin = {
    name: "유진",
    group: "아이브",
    dance: function() {
        return `${this.name} 춤추기`;
    }
};

console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin["name"]);

console.log(yuJin.dance());


const nameKey = 'name';
const nameValue = '유진';

const groupKey = 'group';
const groupValue = '아이브';

const yuJin2 = {
    [nameKey]: nameValue,
    [groupKey]: groupValue,
    dance: function() {
        return `${this.name} 춤추기`;
    }
};

console.log(yuJin2);
console.log(yuJin2.dance());

yuJin2['group'] = '블랙핑크';
console.log(yuJin2);

yuJin2["englishName"] = "Jin";
console.log(yuJin2);

delete yuJin2['englishName'];
console.log(yuJin2);


/**
 * rorcpdml xmrwld
 * 1 const로 선언할경우 객체를 변경할 수 없다.
 * 2 객체 안의 프로퍼티나 메서드는 변경할 수 있다 
 */

