const skillList: HTMLElement | null = document.getElementById("list-skills");
const skillSelector: HTMLElement | null = document.getElementById("skills");

if(skillSelector){
    skillSelector.addEventListener("change", skillIsSelected);
}

function skillIsSelected (){
    if(skillList instanceof HTMLInputElement && skillSelector instanceof HTMLSelectElement){
        const skill: string = skillSelector.value;
        if(skill !== "Sélectionnez les compétences"){
            if(skillList.value.split(",").includes(skill)){
                const regex: RegExp = new RegExp(`^(.+,)?${skill}(,.+)?$`);
                skillList.value = skillList.value.replace(regex, "$1$2");
                skillList.value = skillList.value.replace(/,$/, "");
                skillList.value = skillList.value.replace(/,,/, ",");
                skillList.value = skillList.value.replace(/^,/, "");
            }
            else{
                if(skillList.value === ""){
                    skillList.value = skill;
                }
                else{
                    skillList.value = `${skillList.value},${skill}`
                }
            }
        }
    }
}