import {logging, PersistentMap} from 'near-sdk-as'

const CandidateUrl = new PersistentMap<string, string>("CandidateUrl");
const CandidatePair= new PersistentMap<string, string[]>("Candidate Pair");
const PromptArray = new PersistentMap<string, string[]>("array of prompts");
const VoteArray= new PersistentMap<string, i32[]>("stores votes");
const userParticipation = new PersistentMap<string, string[]>("user Participation Record");

export function getUrl(name:string):string{
  if(CandidateUrl.contains(name)){
    return CandidateUrl.getSome(name);
  }else{
    logging.log('Can not find the user');
    return ''
  }
}
export function didParticipate(prompt:string, user:string):bool{
  if(userParticipation.contains(prompt)){
    let getArray = userParticipation.getSome(prompt);
    return getArray.includes(user);
  }else{
    logging.log('prompt not found');
    return false;
  }
}
export function getAllPrompt():string[]{
  if(PromptArray.contains('AllArrays')){
    return PromptArray.getSome('AllArrays');
  }else{
    logging.log('no prompt found');
    return [];
  }
}
export function getVotes(prompt:string):i32[]{
  if(VoteArray.contains(prompt)){
    return VoteArray.getSome(prompt);
  }else{
    logging.log('prompt not found for this vote');
    return [0,0];
  }
}
export function addUrl(name:string, url:string):void{
  CandidateUrl.set(name,url);
  logging.log('added url for'+ name);
}
export function addCandidatePair(prompt:string, name1:string, name2:string):void{
  CandidatePair.set(prompt,[name1,name2])
}
export function addToPromptArray(prompt:string):void{
  logging.log('Added to prompt array');
  if(PromptArray.contains('AllArrays')){
    let tempArray=PromptArray.getSome('AllArrays');
    tempArray.push(prompt);
  }else{
    PromptArray.set("AllArrays",[prompt]);
  }
}
export function addVote(prompt:string,index:i32):void{
  if(VoteArray.contains(prompt)){
    let tempArray=VoteArray.getSome(prompt);
    let tempVal=tempArray[index];
    let newVal=tempVal + 1;
    tempArray[index] = newVal;
    VoteArray.set(prompt,tempArray);
  }else{
    let newArray=[0,0];
    newArray[index]=1;
    VoteArray.set(prompt,newArray);
  }
}
export function recordUser(prompt:string, user:string):void{
  if(userParticipation.contains(prompt)){
    let tempArray=userParticipation.getSome(prompt);
    tempArray.push(user);
    userParticipation.set(prompt, tempArray);
  }else{
    userParticipation.set(prompt, [user]);
  }
}
