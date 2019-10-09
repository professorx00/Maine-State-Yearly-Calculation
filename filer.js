const fs = require('fs');

function addtoLine(hoursPass,typePass, lineArray) {
    // console.log(lineArray)
    let hours = 0.00;
    hours = parseFloat(hoursPass);
    let type = typePass;
    // console.log(hours,type)
    switch (type) {
        case "OAL":
            lineArray[1] = (parseFloat(lineArray[1]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OBL":

            lineArray[2] = (parseFloat(lineArray[2]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OBT":

            lineArray[3] = (parseFloat(lineArray[3]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OCT":

            lineArray[4] = (parseFloat(lineArray[4]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OCW":
            
            lineArray[5] = (parseFloat(lineArray[5]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OES":
            // console.log(type + "OES")
            lineArray[6] = (parseFloat(lineArray[6]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OFC":
            // console.log(type + "OFC")
            lineArray[7] = (parseFloat(lineArray[7]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OFL":
            // console.log(type + "OFL")
            lineArray[8] = (parseFloat(lineArray[8]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OHC":
            // console.log(type + "OHC")
            lineArray[9] = (parseFloat(lineArray[9]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OJD":
            // console.log(type + "OJD")
            lineArray[10] = (parseFloat(lineArray[10]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OLU":
            // console.log(type + "OLU")
            lineArray[11] = (parseFloat(lineArray[11]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OMC":
            // console.log(type + "OMC")
            lineArray[12] = (parseFloat(lineArray[12]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OME":
                // console.log(type + "OME");
            lineArray[13] = (parseFloat(lineArray[13]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OMG":
                // console.log(type + "OMG")
            lineArray[14] = (parseFloat(lineArray[14]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OML":
                // console.log(type + "OML")
            lineArray[15] = (parseFloat(lineArray[15]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OMP":
                // console.log(type + "OMP")
            lineArray[16] = (parseFloat(lineArray[16]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "ORC":
                // console.log(type + "ORC")
            lineArray[17] = (parseFloat(lineArray[17]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "ORP":
                // console.log(type + "ORP")
            lineArray[18] = (parseFloat(lineArray[18]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OSC":
                // console.log(type + "OSC")
            lineArray[19] = (parseFloat(lineArray[19]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OSD":
                // console.log(type + "OSD")
            lineArray[20] = (parseFloat(lineArray[20]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OSE":
                // console.log(type + "OSE")
            lineArray[21] = (parseFloat(lineArray[21]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OSF":
                // console.log(type + "OSF")
            lineArray[22] = (parseFloat(lineArray[22]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OSH":
                // console.log(type + "OSH")
            lineArray[23] = (parseFloat(lineArray[23]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OSK":
                // console.log(type + "OSK")
            lineArray[24] = (parseFloat(lineArray[24]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OSM":
                // console.log(type + "OSM")
            lineArray[25] = (parseFloat(lineArray[25]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OSP":
                // console.log(type + "OSP")
            lineArray[26] = (parseFloat(lineArray[26]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OTA":
                // console.log(type + "OTA")
            lineArray[27] = (parseFloat(lineArray[27]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OTF":
                // console.log(type + "OTF")
            lineArray[28] = (parseFloat(lineArray[28]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OTI":
                // console.log(type + "OTI")
            lineArray[29] = (parseFloat(lineArray[29]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OTM":
                // console.log(type + "OTM")
            lineArray[30] = (parseFloat(lineArray[30]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OTR":
                // console.log(type + "OTR")
            lineArray[31] = (parseFloat(lineArray[31]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OTS":
                // console.log(type + "OTS")
            lineArray[32] = (parseFloat(lineArray[32]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OUL":
                // console.log(type + "OUL")
            lineArray[33] = (parseFloat(lineArray[33]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OUS":
                // console.log(type + "OUS")
            lineArray[34] = (parseFloat(lineArray[34]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OVC":
                // console.log(type + "OVC")
            lineArray[35] = (parseFloat(lineArray[35]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OVS":
                // console.log(type + "OVS")
            lineArray[36] = (parseFloat(lineArray[36]) + hours).toFixed(2)
            lineArray[40] = (parseFloat( lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OVY":
                // console.log(type + "OVY")
            lineArray[37] = (parseFloat(lineArray[37]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "OWC":
                // console.log(type + "OWC")
            lineArray[38] = (parseFloat(lineArray[38]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        case "UOT":
                // console.log(type + "UOT")
            lineArray[39] = (parseFloat(lineArray[39]) + hours).toFixed(2)
            lineArray[40] = (parseFloat(lineArray[40]) + hours).toFixed(2)
            return lineArray;
        default:
                // console.log(type + " DEFAULT " + typeof type)
            return lineArray;
    }
}

function processFile(data) {
    let titles = ["Last Name","First Name","OAL","OBL","OBT","OCT","OCW","OES","OFC","OFL","OHC","OJD","OLU","OMC","OME","OMG","OML","OMP","ORC","ORP","OSC","OSD","OSE","OSF","OSH","OSK","OSM","OSP","OTA","OTF","OTI","OTM","OTR","OTS","OUL","OUS","OVC","OVS","OVY","OWC","UOT","total"]
    let final = []
    let names =[]
    let grouping = []
    dataArray = data.split("\r\n");
    dataArray = dataArray.splice(1);
    dataArray.forEach(element => {
        let line = (element.split(","))
        let firstname = line[0].slice(1,)
        let length=line[1].length-1;
        let lastname = line[1].slice(1,length)
        let name=firstname+", "+lastname;
        grouping.push([name,line[2],line[3]])
    });
    for (let x = 0; x < grouping.length-1; x++) {
        if(grouping[x][0]!==grouping[x+1][0]){
            names.push(grouping[x][0])
        }
    }
    names.push(grouping[grouping.length-1][0])
    let object={}
    for(let name=0;name<names.length;name++){
        let paycodes = []
        
        for(let y=0;y<grouping.length;y++){
            if(names[name]===grouping[y][0]){
                paycodes.push(grouping[y][1],grouping[y][2])
            }
        }
        object[names[name]]=paycodes;
    }
    // console.log(Object.keys(object))
   Object.keys(object).forEach(function(key){
        let lineArray = [key, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        for(let j=1;j<object[key].length;j+=2){
            lineArray = addtoLine(object[key][j-1],object[key][j],lineArray)
        }
        final.push(lineArray)
   })
   final.splice(0,0,titles)
   final.forEach(element => {
       let line = element.join(",")+"\r\n";
       fs.appendFile('FinalExport.csv',line,'utf8', (err) => {
        if (err) throw err;
      })
   });
}

fs.readFile('employees.csv', 'utf8', (err, data) => {
    let content = data;
    processFile(content);
});


