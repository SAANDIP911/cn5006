const dateofBirth= "05/10/2006"
const getStudentName = () =>
{
    return "Sandip"
}
const getcampusName = () =>
{
    return ("UEL Campus")
}

exports.getName=getStudentName
exports.Location=getcampusName
exports.dob=dateofBirth

exports.Studentgrade=(marks) =>
{
    if (marks>50 && marks < 70) return ("B grade")
        else
    return ("A grade")
}