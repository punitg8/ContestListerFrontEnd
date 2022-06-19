export const convertDuration = (origianlDuration) =>{
  let convertedDuration="";
  let days=Math.floor(origianlDuration/(60*60*24));
  let hours = Math.floor(origianlDuration/(60*60))-days*24;
  let minutes=Math.floor(origianlDuration/60)-hours*60-days*24*60;
  let seconds=origianlDuration-minutes*60-hours*60*60-days*24*60*60;
  if(days>0) convertedDuration+=days+"days ";
  if(hours>0) convertedDuration+=hours+"hr ";
  if(minutes>0) convertedDuration+=minutes+"mins ";
  if(seconds>0) convertedDuration+=seconds+"secs";
  return convertedDuration;
}