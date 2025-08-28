const skillList: HTMLElement | null = document.getElementById("list-skills");
const skillSelector: HTMLElement | null = document.getElementById("skills");

if(skillSelector){
    skillSelector.addEventListener("change", skillIsSelected);
}

function skillIsSelected (){
    if(skillList instanceof HTMLInputElement && skillSelector instanceof HTMLSelectElement){
        const skill: string = skillSelector.value;
        if(skill !== "Sélectionnez les compétences"){
            if(skillList.value === ""){
                skillList.value = skill;
            }
            else{
                skillList.value = `${skillList.value},${skill}`
            }
        }
    }
}