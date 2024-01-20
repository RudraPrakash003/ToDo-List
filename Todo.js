window.addEventListener('load', ()=>{
    const form= document.querySelector("#task-form");
    const input= document.querySelector("#task-input");
    const list= document.querySelector("#tasks");


    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        const task = input.value;
        if (!task) {
            return;
        } 

        const task_div = document.createElement("div");
        task_div.classList.add("task");
        list.appendChild(task_div);


        const task_content_div = document.createElement("div");
        task_content_div.classList.add("content");
        task_div.appendChild(task_content_div);
   

        const task_input= document.createElement("input");
        task_input.classList.add("text");
        task_input.type = "text";
        task_input.value= task;
        task_input.setAttribute("readonly", "readonly");
        task_content_div.appendChild(task_input);


        const task_actions_div= document.createElement("div");
        task_actions_div.classList.add("actions");
        task_div.appendChild(task_actions_div);


        const task_edit_botton= document.createElement("button");
        task_edit_botton.classList.add("Edit");
        task_edit_botton.innerHTML = "Edit";

        const task_completed_button= document.createElement("button");
        task_completed_button.classList.add("Completed");
        task_completed_button.innerHTML = "Not Completed";

        const task_delete_button= document.createElement("button");
        task_delete_button.classList.add("Delete");
        task_delete_button.innerHTML = "Delete";

        task_actions_div.appendChild(task_edit_botton);
        task_actions_div.appendChild(task_completed_button);
        task_actions_div.appendChild(task_delete_button);
        

        task_edit_botton.addEventListener('click', ()=>{
            if (task_edit_botton.innerText.toLowerCase() =="edit") {
                    task_input.removeAttribute("readonly");
                    task_input.focus();
                    task_edit_botton.innerText = "Save";
                    task_input.style.textDecoration="none"
            }else{
                task_input.setAttribute("readonly", "readonly");
                task_edit_botton.innerText ="Edit";
                
            }
        });

        task_delete_button.addEventListener('click', ()=>{
                let pop = document.getElementById("popup")
                pop.style.visibility="visible"
                
                let ok = document.getElementById("okbutton")
                ok.addEventListener('click',()=>{
                    pop.style.visibility="hidden"
                    list.removeChild(task_div);
                })
                let cancel = document.getElementById("cancelbutton")
                cancel.addEventListener('click',()=>{
                    pop.style.visibility="hidden"
                })
        })

        task_completed_button.addEventListener('click', ()=>{

            if (task_completed_button.innerText.toLowerCase() =="not completed") {
                

                task_input.style.textDecoration="line-through";
                task_input.setAttribute("readonly", "readonly");
                task_completed_button.innerText = "Completed";
                task_completed_button.style.color="#00c78a"
            }else{
                task_input.style.textDecoration="none";
                task_completed_button.innerText = "Not Completed";
                task_completed_button.style.color="#787878"
            }

        })
   
        input.value = "";

    });
});