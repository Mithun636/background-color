let arr=["blue","green","pink","orange","red"];
let i=0;
function change()
{
        document.getElementById('box').style.backgroundColor=arr[i];
        document.getElementById('btn').style.backgroundColor=arr[i];
        if(arr[i]=="red")
        {
                document.getElementById('text').innerText="Background Color : Red";
        }
        else if(arr[i]=="blue")
        {
                document.getElementById('text').innerText="Background Color : Blue";
        }
        else if(arr[i]=="green")
        {
                document.getElementById('text').innerText="Background Color : Green";
        }
        else if(arr[i]=="pink")
        {
                document.getElementById('text').innerText="Background Color : Pink";
        }
        else if(arr[i]=="orange")
        {
                document.getElementById('text').innerText="Background Color : Orange";
        } 
        i=(i+1)%arr.length; 
}