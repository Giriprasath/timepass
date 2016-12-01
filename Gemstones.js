function processData(input) {
    var inputs = input.split("\n");
    var noInputs = inputs[0];
    var gemElements =67108863;
    
    for(i=1;i<=noInputs;i++)
    {
        var rock = inputs[i];
        
         
        var elementChart = 0;
        for(j=0;j<rock.length;j++)
            {
                var bit = rock.charCodeAt(j) -97 ;
                var mask = 1<<bit;
                elementChart|=mask;
                
            }
        gemElements = gemElements & elementChart;     
    }
      
    var count = 0;
    var n = gemElements;
    while(n)
    {
        n &= (n-1) ;
      count++;
    }
   process.stdout.write(count);
} 

//https://www.hackerrank.com/challenges/gem-stones
