<script>
  function alphanumeric(inputtxt)
{
 var letterNumber = /^[0-9a-zA-Z]+$/;
 if((inputtxt.match(letterNumber))) 
  {
   return true;
  }
  else
  { 
   alert("message"); 
   return false; 
  }
}
alphanumeric("goodachari116");
</script>
