let currentTab='all'

const tabActive=["bg-blue-500", "text-white"];
const tabInactive=["bg-white","text-black","text-slate-700","border-slate-200"]

const allContainer=document.getElementById("allCard")
const interviewContainer=document.getElementById("interview-container")
const rejectedContainer=document.getElementById("rejected-container")

const emptyState=document.getElementById("empty-state")

function switchTab(tab){
    console.log(tab);
    const tabs = ["all","interview","rejected"];
      currentTab=tab;
      for(const t of tabs){
        const tabName=document.getElementById("tab-" + t);
        if(t === tab){
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        }else{
            tabName.classList.remove(...tabActive)
            tabName.classList.add(...tabInactive)
        }
      }
      const pages=[allContainer,interviewContainer,rejectedContainer]

      for(const section of pages){
        section.classList.add("hidden");
      }

     emptyState.classList.add("hidden")
      if(tab==="all"){
        allContainer.classList.remove("hidden");
       if( allContainer.children.length<1){
         emptyState.classList.remove("hidden")
       }
      }
      else if(tab==="interview"){
        interviewContainer.classList.remove("hidden");
        if(interviewContainer.children.length<1){
            emptyState.classList.remove("hidden")
        }
      }else{
        rejectedContainer.classList.remove("hidden");
        if(rejectedContainer.children.length<1){
            emptyState.classList.remove("hidden")
        }
      }
      updateStat()
}


const totalstate= document.getElementById("Total")
const interviewState=document.getElementById("Interview-Count");
const rejectState=document.getElementById("Rejected-Count")
const availablestate=document.getElementById("available-job-id")


switchTab(currentTab);

document.querySelector(".all-jobs").addEventListener("click", function(event){
    const clickedElement=event.target;

    const card=clickedElement.closest(".card")
    const Status= card.querySelector(".status")

    const parent=card.parentNode;

    if(clickedElement.classList.contains("interview")){
        Status.innerText="interviewed"
        interviewContainer.appendChild(card);
        updateStat()
    }
    if(clickedElement.classList.contains("rejected")){
        Status.innerText="rejected"
         rejectedContainer.appendChild(card);
         updateStat()
    }
    if(clickedElement.classList.contains("delete")){
        parent.removeChild(card)
        updateStat()
    }
})

function updateStat(){
  const counts={
    all:allContainer.children.length,
    interview: interviewContainer.children.length,
    rejected: rejectedContainer.children.length
  }
  totalstate.innerText=counts.all;
  interviewState.innerText=counts.interview;
  rejectState.innerText=counts.rejected
  availablestate.innerText=counts[currentTab

  ]

  if(counts[currentTab]<1){
    emptyState.classList.remove("hidden");
  }else{
    emptyState.classList.add("hidden");
  }
}
updateStat()