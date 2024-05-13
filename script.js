let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map((elt)=>{
        if(elt.profession=="developer")
            console.log(elt);
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((elt)=>{
        if(elt.profession=="developer")
            console.log(elt);
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    let obj = {
        id:4,
        name:"susan",
        age:"20",
        profession:"intern"
    }
    arr.push(obj);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let newArr = arr.filter((elt)=>{
        if(elt.profession!="admin")
            return elt;
    })
    arr = newArr;
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let brr=[];

    let obj1 = {
        id:5,
        name:"max",
        age:"24",
        profession:"junior developer" 
    }

    let obj2 = {
        id:6,
        name:"walsh",
        age:"29",
        profession:"intern"
    }

    let obj3 = {
        id:7,
        name:"chris",
        age:"28",
        profession:"senior developer" 
    }

    brr.push(obj1,obj2,obj3);
    let A = arr.concat(brr);

    console.log(A);
  }