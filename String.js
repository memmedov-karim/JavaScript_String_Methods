class String {
  constructor(name) {
    this.name = name;
  }
  length() {
    let len = 0;
    for (let i of this.name) {
      len += 1;
    }
    return len;
  }
  slice(start_position, end_position) {
    if (start_position && end_position) {
      if (start_position > 0 && end_position > 0) {
        if (
          !isNaN(start_position) &&
          !isNaN(end_position) &&
          end_position < start_position
        ) {
          return "Second argument must be greater than first argument!!!";
        }
        if (isNaN(end_position) || isNaN(start_position)) {
          return `Arguments must be number type not ${typeof start_position} or ${typeof end_position}`;
        }
        if (!isNaN(start_position) && !isNaN(end_position)) {
          if (
            start_position <= this.name.length &&
            end_position <= this.name.length + 1
          ) {
            let returnedstring = "";
            for (let pos = 0; pos < this.name.length; pos++) {
              if (pos >= start_position && pos < end_position) {
                returnedstring += this.name[pos];
              }
            }
            return returnedstring;
          }
        } else {
          return `First argument must be equals or less than ${
            this.name.length
          } Second argument must be less than or equals ${
            this.name.length + 1
          } `;
        }
      } else {
        return "Arguments must be greater than zero";
      }
    } else {
      if (start_position < 0) {
        return "Argument must be greater than 0";
      }
      if (isNaN(start_position)) {
        return `Argument type must be number not a ${typeof start_position}`;
      }
      if (start_position >= this.name.length) {
        return "Argument must be less than  string length";
      }
      if (start_position === 0) {
        return this.name;
      }
      if (start_position === this.name.length - 1) {
        return this.name[this.name.length - 1];
      }
      let returnedstring = "";
      for (let pos = start_position; pos < this.name.length; pos++) {
        returnedstring += this.name[pos];
      }
      return returnedstring;
    }
  }
  substring(start_position,end_position){
    if(isNaN(start_position) || isNaN(end_position)){return `Arguments type must be number not ${typeof start_position} or ${typeof end_position}`};
    if(start_position<0 || end_position<0){return "Arguments must be greater than zero"};
    if(start_position>this.name.length-1) {return "First argument must be less than last index of string"};
    if(end_position>this.name.length) {return "Second argument must be less than last index of string"};
    if(start_position && end_position){
        if(start_position<=end_position){
            return this.name.slice(start_position,end_position)
        }
        else{
            let returnedstring = "";
            for(let pos=start_position;pos<start_position+end_position+1;pos++){
                returnedstring+=this.name[pos]
            }
            return returnedstring
        }
    }
    else{
        return "Method except two arguments but passed one argument";
    }
  }
  replace(string_element,replace_element){
  }
  toUpperCase(){
    const AlphaBetObj = {
      "q":"Q",
      "w":"W",
      "e":"E",
      "r":"R",
      "t":"T",
      "y":"Y",
      "u":"U",
      "i":"I",
      "o":"O",
      "p":"P",
      "l":"L",
      "k":"K",
      "j":"J",
      "h":"H",
      "g":"G",
      "f":"F",
      "d":"D",
      "s":"S",
      "a":"A",
      "z":"Z",
      "x":"X",
      "c":"C",
      "v":"V",
      "b":"B",
      "n":"N",
      "m":"M",
    }
    let returneddata = "";
    for(let i of this.name){
      if(AlphaBetObj[i]){
        returneddata+=AlphaBetObj[i]
      }
      else{
        returneddata+=i
      }
    }
    return returneddata
  }
  toLowerCase(){
    const AlphaBetObj = {
      "Q":"q",
      "W":"w",
      "E":"e",
      "R":"r",
      "T":"t",
      "Y":"y",
      "U":"u",
      "I":"i",
      "O":"o",
      "P":"p",
      "L":"l",
      "K":"k",
      "J":"j",
      "H":"h",
      "G":"g",
      "F":"f",
      "D":"d",
      "S":"s",
      "A":"a",
      "Z":"z",
      "X":"x",
      "C":"c",
      "V":"v",
      "B":"b",
      "N":"n",
      "M":"m",
    }
    let returneddata = "";
    for(let i of this.name){
      if(AlphaBetObj[i]){
        returneddata+=AlphaBetObj[i]
      }
      else{
        returneddata+=i
      }
    }
    return returneddata
  }
  concat(between_char,...strings){
    let validate = [between_char,...strings]
    if(validate.length<2) return "Function accept minimum two arguments"
    if((typeof between_char)!=="string") return "First argument must be string"
    let first_section = [this.name,between_char];
    let second_section = [];
    for(let i of strings){
      second_section.push(i);
      if(i!==strings[strings.length-1]){
        second_section.push(between_char)
      }
    }
    let returneddata = [...first_section,...second_section].join("")
    return returneddata
  }
  trim(){
    let first_letter_index;
    let last_letter_index;
    for(let i=0;i<this.name.length;i++){
      if(this.name[i]!==" "){
        first_letter_index = i;
        break 
      } 
    }
    for(let i=this.name.length-1;i>-1;i--){
      if(this.name[i]!==" "){
        last_letter_index = i;
        break
      }
    }
    const trimmed_string = this.name.slice(first_letter_index,last_letter_index+1)
    return trimmed_string.length
  }
  trimStart(){
    let first_letter_index;
    for(let i=0;i<this.name.length;i++){
      if(this.name[i]!==" "){
        first_letter_index = i;
        break 
      } 
    }
    return this.name.slice(first_letter_index)
  }
  trimEnd(){
    let last_letter_index;
    for(let i=this.name.length-1;i>-1;i--){
      if(this.name[i]!==" "){
        last_letter_index = i;
        break
      }
    }
    return this.name.slice(0,last_letter_index+1)
  }
  padStart(num_of_strings,str){
    let validate = [num_of_strings,str];
    if(validate.length<2 || validate.length>2) return "Function except two arguments";
    if((typeof num_of_strings)!=="number") return "First argument must be number";
    if((typeof str)!=="string") return "Second argument must be string";
    let pad_string = "";
    for(let i=0;i<num_of_strings;i++){
      pad_string+=str
    }
    return pad_string+this.name
  }
  padEnd(num_of_strings,str){
    let validate = [num_of_strings,str];
    if(validate.length<2 || validate.length>2) return "Function except two arguments";
    if((typeof num_of_strings)!=="number") return "First argument must be number";
    if((typeof str)!=="string") return "Second argument must be string";
    let pad_string = "";
    for(let i=0;i<num_of_strings;i++){
      pad_string+=str
    }
    return this.name+pad_string
  }
  charAt(pos){
    if(!pos && pos!==0) return "Function except one argument";
    if((typeof pos)!=="number") return "First argument mus be number";
    for(let i=0;i<this.name.length;i++){
      if(i === pos){
        return this.name[i]
      }
    }
  }
  split(seperater){
    if(!seperater) return "Function except one argument";
    if((typeof seperater)!=="string") return "Argument must be string";
    const FindAllSameElementIndexes = (seperates,string) => {
      const indexes = [0];
      let index = 0;
      for(let i of string){
        index+=1
        if(string[index]===seperates){
          indexes.push(index)
        }
      }
      indexes.push(string.length)
      return indexes
    }
    const result = [];
    for(let i=0;i<FindAllSameElementIndexes(seperater,this.name).length-1;i++){
      if(i===0){
        result.push(this.name.slice(FindAllSameElementIndexes(seperater,this.name)[i],FindAllSameElementIndexes(seperater,this.name)[i+1]))

      }
      else{
        result.push(this.name.slice(FindAllSameElementIndexes(seperater,this.name)[i]+1,FindAllSameElementIndexes(seperater,this.name)[i+1]))
      }
    }
    return result
  }
}
const str = new String("  sa/l/A/azzm/Ksl/m    ");
const testting = [str.length(),str.slice(3,5),str.slice("3","djb"),str.slice(4),str.substring(3,7),str.toLowerCase(),str.toUpperCase(),str.concat("+","kdm","jsjn"),str.trim(),str.trimStart(),str.trimEnd(),str.padStart(3,"*"),str.padEnd(4,"#"),str.charAt(8),str.split("/")]
for(let i of testting){
  console.log(i)
}

