const st = "Testyantra"
const s = st.toLowerCase()

for(let i=0; i<s.length; i++)
{
	let count = 0
	for(let j=0; j<s.length; j++)
	{
        
        {
		if(s.charAt(i)==s.charAt(j))
		{
			if(i>j)
			{
				break
			}
			else
			{
				if(s.charAt(i)=="a" && s.charAt(i)=="e" && s.charAt(i)=="i" && s.charAt(i)=="o" && s.charAt(i)=="u")
				{
					count++
				}
			}
		}
    }
	}
	if(count>=1)
	{
		//process.stdout.write(s.charAt(i)+count+" ")		// to print in a single line
		console.log(s.charAt(i)+"---> "+count);
	}
}