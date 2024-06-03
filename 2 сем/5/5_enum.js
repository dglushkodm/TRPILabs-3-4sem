var Membership;
(function (Membership) {
    Membership[Membership["simple"] = 0] = "simple";
    Membership[Membership["standart"] = 1] = "standart";
    Membership[Membership["premium"] = 2] = "premium";
})(Membership || (Membership = {}));
var membership = Membership.standart;
var membershiprever = Membership[3];
console.log(membership);
console.log(membershiprever);
var SociaMedia;
(function (SociaMedia) {
    SociaMedia["VK"] = "VK";
    SociaMedia["TG"] = "TG";
    SociaMedia["INSTA"] = "INSTA";
})(SociaMedia || (SociaMedia = {}));
var social = SociaMedia.INSTA;
console.log(social);
