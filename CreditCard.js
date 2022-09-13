<script>
  function cardnumber(inputtxt)
{
  var cardno = /^(?:3[47][0-9]{13})$/;
  if(inputtxt.match(cardno))
        {
      return true;
        }
      else
        {
        alert("Not a valid Amercican Express credit card number!");
        return false;
        }
}
document.write(cardnumber("412345678901232"));
</script>
