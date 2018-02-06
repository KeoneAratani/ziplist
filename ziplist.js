const testlist1 = ['a', 'b', 'c'];
const testlist2 = [1, 2, 3];

function ziplist(list1, list2){
  let resultlist = [];
  for(let i=0;i<list1.length;i++){
    resultlist.push(list1[i], list2[i]);
  }
  return resultlist;
}

console.log(ziplist(testlist1,testlist2));

function ziplistSimpleWay(list1, list2){
  return _.flatten(_.zip(list1, list2));
}

console.log(ziplistSimpleWay(testlist1,testlist2));