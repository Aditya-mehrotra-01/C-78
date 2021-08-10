var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Fmaily Book","B.S.Mehrotra", "Ananya Mehrotra", "Garima Mehrotra"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    
    var update_Image = [images];
   
    var update_Name = [names] ;
 
    document.getElementById("family_member_image").src = update_Image;
    document.getElementById("family_member_name").innerHTML = update_Name;
}
