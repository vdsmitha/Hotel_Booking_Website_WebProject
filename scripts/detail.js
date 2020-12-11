function calculate(){
    var adults=document.getElementById('adults').value;
    var fromdate=moment(document.getElementById('fromdate').value);
    var todate=moment(document.getElementById('todate').value);
        let days=todate.diff(fromdate,'days');
        let price=days*adults*1000 || 0;
        document.getElementById("total").value="Rs. "+price;
    
    }