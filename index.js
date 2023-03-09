const button=document.querySelector(".btn");
const bd=document.body;
const text1=document.querySelector("#text1");
const task=document.querySelector(".tasks");
button.addEventListener("click",(e)=>{
  e.preventDefault();
  if(text1.value.trim().length=='')
   {
    alert('Please enter a task');
   } 
   else{
    const val=text1.value;
    const red=Math.floor(Math.random()*255);
      const green=Math.floor(Math.random()*255);
        const blue=Math.floor(Math.random()*255);
        const rgb=`rgb(${red} ${green} ${blue})`;
      const li=document.createElement("div");
      li.classList.add("task2");
      const li1=document.createElement("div");
      li1.classList.add("li11");
      li1.textContent=val;
      li.appendChild(li1);
       li.style.background=rgb;
    //    const task_input_el = document.createElement('input');
    // task_input_el.classList.add('text');
    // task_input_el.type = 'text';
    // task_input_el.value = text1.value;
    // task_input_el.setAttribute('readonly', 'readonly');
    // li1.appendChild(task_input_el);
      const act=document.createElement("div1");
        act.classList.add("actions");
        // const edit1=document.createElement("div2");
        // edit1.classList.add("edit");
        // edit1.textContent='Edit';
        const delete1=document.createElement("div3");
        delete1.classList.add("delete");
        delete1.textContent='Delete';
        // act.appendChild(edit1);
        act.appendChild(delete1);
li.appendChild(act);
         task.appendChild(li);
         delete1.addEventListener("click",()=>{
          task.removeChild(li);
        }
        );
         text1.value='';
    //       edit1.addEventListener("click",()=>{

    //   if (edit1.textContent.toLowerCase() == "edit") {
    //     edit1.textContent = "Save";
    //     task_input_el.removeAttribute("readonly");
    //     task_input_el.focus();
    //   } else {
    //     edit1.textContent = "Edit";
    //     task_input_el.setAttribute("readonly", "readonly");
    //   }
    // });
        }
});