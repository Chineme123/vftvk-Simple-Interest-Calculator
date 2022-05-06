function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var year = document.getElementById("years").value;

    document.getElementById("Output").innerHTML = "If you deposit " + principal + "," + "<br>"
                                                + "at an interest rate of " + rate + "." + "<br>"
                                                + "You will recieve an amount of " + (Number(principal) + (principal*rate*year)/100) + "," + "<br>"
                                                + "in the year " + (Number(year) + new Date().getFullYear()) + "." + "<br>";
}