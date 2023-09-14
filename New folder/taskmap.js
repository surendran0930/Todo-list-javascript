let firstValue = document.getElementById("firstValue");
let secondValue = document.getElementById("secondValue");
let buttonAdd = document.getElementById("buttonAdd");
let count = 0;
let finalResult = [];

// let titleBox=""
function createContents() {
  // finalResult.map(e,index =>(createContents(e.Title,e.Body,e.id))
  finalResult.map((e, index) => {



    // const firstAns = document.createElement("p")
    // const secondAns = document.createComment("p")

    const overAllDiv = document.createElement("div")
    overAllDiv.id = "overAllDiv"
    overAllDiv.className = "overAll"
    lists.append(overAllDiv)


    const titleBox = document.createElement("div");
    titleBox.className = "add_box";
    titleBox.id = `add_box_Id${index}`;
    overAllDiv.appendChild(titleBox);


    const div1 = document.createElement("div");
    div1.id = "firstDiv";
    div1.className = "taskbox";
    titleBox.appendChild(div1);

    const titleFirstPara = document.createElement("p");
    titleFirstPara.id = "tasktittle";
    titleFirstPara.innerHTML = e.Title;
    // console.log
    div1.appendChild(titleFirstPara);

    const titleFirstSec = document.createElement("p");
    titleFirstSec.id = "taskcontent";
    titleFirstSec.innerHTML = e.Body;
    div1.appendChild(titleFirstSec);

    const div2 = document.createElement("div");
    div2.id = "secondDiv";
    // titleBox.appendChild(div2)

    const delButton = document.createElement("button");
    // delButton.onclick = "deleteValue()"
    delButton.className = "del_btn";
    delButton.id = "button1";
    div2.appendChild(delButton);
    delButton.addEventListener("click", () => {

      console.log("delete item");
      // delbtnpop()
      // const findIndex =finalResult.indexOf(e)
      // console.log(findIndex)
      // if(findIndex >-1){
      //   lists.removeChild(lists.children[findIndex]);

      //   finalResult.splice(findIndex,1)
      //   // createContents(finalResult)
      //   console.log(finalResult,"finally done")



      // }
      const delOverAll = document.createElement("div")
      delOverAll.className = "del_popup"
      delOverAll.id = "delOverAll"
      main_id.append(delOverAll)

      const del_div1 = document.createElement("div")
      del_div1.className = "del_popup_content"
      delOverAll.append(del_div1)

      const del_div2 = document.createElement("div")
      del_div2.className = "del_pop_head"
      del_div1.append(del_div2)

      const del_Para = document.createElement("p")
      del_Para.innerHTML = "Delete this task?"
      del_div2.append(del_Para)

      const del_div3 = document.createElement("div")
      del_div3.className = "del_btn_popup"
      del_div1.append(del_div3)

      const del_div4 = document.createElement("div")
      del_div3.append(del_div4)

      const del_button1 = document.createElement("button")
      del_button1.innerHTML = "Yes"
      del_button1.className = "del-button"
      del_div4.append(del_button1)
      del_button1.addEventListener("click", () => {
        const findIndex = finalResult.indexOf(e)
        console.log(findIndex)
        if (findIndex > -1) {
          lists.removeChild(lists.children[findIndex]);

          finalResult.splice(findIndex, 1)
          // createContents(finalResult)
          console.log(finalResult, "finally done")



        }
        delOverAll.style.display = "none"

      })

      const del_div5 = document.createElement("div")
      del_div3.append(del_div5)

      const del_button2 = document.createElement("button")
      del_button2.innerHTML = "No"
      del_button2.className = "del-button"
      del_div5.append(del_button2)
      del_button2.addEventListener("click", () => {
        delOverAll.style.display = "none"
      })








    });

    const img1 = document.createElement("img");
    img1.src = "../assets/delete.svg";
    delButton.appendChild(img1);
    titleBox.appendChild(div2);

    const mainDiv = document.createElement("div")
    mainDiv.id = "mainDiv"
    mainDiv.className = "edit_container"
    overAllDiv.append(mainDiv)

    const firstDiv = document.createElement("div")

    const firstButton = document.createElement("button")
    firstButton.className = "edit_button"
    firstDiv.append(firstButton)


    const firstImg = document.createElement("img")
    firstImg.src = "../assets/share.png"
    firstButton.appendChild(firstImg)
    firstDiv.appendChild(firstButton)
    mainDiv.appendChild(firstDiv)

    const secondDiv = document.createElement("div")

    const secondButton = document.createElement("button")
    secondButton.className = "edit_button"
    secondDiv.appendChild(secondButton)

    const secondImg = document.createElement("img")
    secondImg.src = "../assets/info.png"
    secondButton.appendChild(secondImg)

    const thirdDiv = document.createElement
      ("div")

    const thirdButton = document.createElement("button")
    thirdButton.className = "edit_button"
    thirdDiv.appendChild(thirdButton)

    const thirdImg = document.createElement("img")
    thirdImg.src = "../assets/edit.png"
    thirdButton.appendChild(thirdImg)

    mainDiv.appendChild(secondDiv)
    mainDiv.appendChild(thirdDiv)
  })



}

function errThrough() {
  // debugger
  let check = false;
  if (firstValue.value == null || firstValue.value == "") {
    document.getElementById("firstErr").innerHTML = "enter some content ";
    check = true
    //   // document.getElementById("buttonAdd").disabled = true;

    //   return true;
  }
  if (secondValue.value == "" || secondValue.value == null) {
    document.getElementById("secondErr").innerHTML = "enter some content";
    // titleBox.style.display="none"
    check = true
  }
  // else if(firstValue.value .length>1 && secondValue.value.length>1){
  //     return true

  // }
  if (firstValue.value !== "" && secondValue.value !== "") {
    document.getElementById("firstErr").innerHTML = "";
    document.getElementById("secondErr").innerHTML = "";

    // document.getElementById("buttonAdd").disabled = false;
    check = false
  }
  return check
}


buttonAdd.addEventListener("click", () => {


  // debugger
  let err = errThrough()
  if (err) {
    return
  }
  // console.log(indexof(add))

  // 

  // disableBtn()



  // count ++;
  let firstValue = document.getElementById("firstValue").value
  let secondValue = document.getElementById("secondValue").value
  console.log(firstValue, secondValue)
  finalResult.push({ Title: firstValue, Body: secondValue, id: count })
  console.log(finalResult)



  // if(finalResult==""){
  //     document.getElementById("buttonAdd").disabled = true
  // }else{
  //     document.getElementById("buttonAdd").disabled = false
  // }    
  // buttonAdd.setAttribute('disabled',true)
  // console.log(finalResult)
  // console.log(firstAns)
  // console.log(firstValue);

  lists.innerHTML = '';
  // storage()

  firstValue.value = '';
  console.log(firstValue)
  secondValue = '';
  console.log(finalResult)
  createContents(finalResult)
  console.log(finalResult, 'ddddddd')
  // editButton()
  // delbtnpop()




})



// edit info  share button creation

function editButton() {
  console.log('edit')
  const mainDiv = document.createElement("div")
  mainDiv.id = "mainDiv"
  mainDiv.className = "edit_container"
  overAllDiv.append(mainDiv)

  const firstDiv = document.createElement("div")

  const firstButton = document.createElement("button")
  firstButton.className = "edit_button"
  firstDiv.append(firstButton)


  const firstImg = document.createElement("img")
  firstImg.src = "../assets/share.png"
  firstButton.appendChild(firstImg)
  firstDiv.appendChild(firstButton)
  mainDiv.appendChild(firstDiv)

  const secondDiv = document.createElement("div")

  const secondButton = document.createElement("button")
  secondButton.className = "edit_button"
  secondDiv.appendChild(secondButton)

  const secondImg = document.createElement("img")
  secondImg.src = "../assets/info.png"
  secondButton.appendChild(secondImg)

  const thirdDiv = document.createElement
    ("div")

  const thirdButton = document.createElement("button")
  thirdButton.className = "edit_button"
  thirdDiv.appendChild(thirdButton)

  const thirdImg = document.createElement("img")
  thirdImg.src = "../assets/edit.png"
  thirdButton.appendChild(thirdImg)

  mainDiv.appendChild(secondDiv)
  mainDiv.appendChild(thirdDiv)





}

// delete button creation   


function delbtnpop() {
  const delOverAll = document.createElement("div")
  delOverAll.className = "del_popup"
  delOverAll.id = "delOverAll"
  main_id.append(delOverAll)

  const del_div1 = document.createElement("div")
  del_div1.className = "del_popup_content"
  delOverAll.append(del_div1)

  const del_div2 = document.createElement("div")
  del_div2.className = "del_pop_head"
  del_div1.append(del_div2)

  const del_Para = document.createElement("p")
  del_Para.innerHTML = "Delete this task?"
  del_div2.append(del_Para)

  const del_div3 = document.createElement("div")
  del_div3.className = "del_btn_popup"
  del_div1.append(del_div3)

  const del_div4 = document.createElement("div")
  del_div3.append(del_div4)

  const del_button1 = document.createElement("button")
  del_button1.innerHTML = "Yes"
  del_button1.className = "del-button"
  del_div4.append(del_button1)
  del_button1.addEventListener("click", () => {
    const findIndex = finalResult.indexOf(e)
    console.log(findIndex)
    if (findIndex > -1) {
      lists.removeChild(lists.children[findIndex]);

      finalResult.splice(findIndex, 1)
      // createContents(finalResult)
      console.log(finalResult, "finally done")



    }

  })

  const del_div5 = document.createElement("div")
  del_div3.append(del_div5)

  const del_button2 = document.createElement("button")
  del_button2.innerHTML = "No"
  del_button2.className = "del-button"
  del_div5.append(del_button2)




}




