/*
    This file contains all the localized strings in the app.
    Current Languages: Fi, En, Se.
*/
import LocalizedStrings from 'react-localization'
let strings = new LocalizedStrings({
    en:{
        signIn: "Sign In",
        signUp: "Sign Up",
        emailAddress: "Email Address",
        username: "Username",
        password: "Password",
        confirmPassword: "Confirm Password",
        rememberMe: "Remember Me",
        forgotPass: "Forgot Password?",
        noAccount: "Don't have an account? Sign Up",
        welcome: "Welcome to the progressive web application that provides information about current status of three most popular areas in Nokia HQ, Espoo",
        logoAlt: "MyCampus Logo",
        validEmail: "Please enter a valid email",
        enterEmail: "Enter the email you want the password to be reset and click send",
        send: "Send",
        joinPlatform: "Join Nokia MyCampus platform",
        backToLogin: "Back to Login",
        usernameError: "Username must be between 2-20 characters",
        passwordError: "Passwords don't match",
        pleaseEnterEmail: "Please enter an email",
        pleaseEnterConfirmPass: "Please enter password confirmation",
        pleaseEnterPassword: "Please enter an password",
        pleaseEnterName: "Please enter a name",
        waitTime1: "wait time < 30s",
        waitTime2: "wait time < 1m",
        waitTime3: "wait time < 1m 30s",
        waitTime4: "wait time < 2m",
        waitTime5: "wait time > 2m",
        restaurantPageTitle: "Queue wait times",
        p10PageTitle: "P10",
        live: "Live",
        history: "History",
        pleaseEnterUsername: "Please enter an username",
        topBarMenuItemHome: "Home",
        topBarMenuItemRestaurant: "Restaurant",
        topBarMenuItemP5: "P5",
        topBarMenuItemP10: "P10",
        topBarMenuItemInfo: "Info",
        topBarMenuItemLogout: "Logout",
        infoPageHeading: "MyCampus is an application for Nokia employees providing specific data from Espoo Nokia Campus. " +
            "Start up named Levitezer, in co-operation with Nokia, has been creating MyCampus. " +
            "Students from Metropolia University of Applied Sciences have been creating the mobile application.",
        infoPageP1: "Thermal Camera sensors cover Midpoint staff restaurant. In the application, utilization rate, " +
            "queue time length and historical data of utilization for the restaurant is available.",
        infoPageP2: "In parking P5 and P10 several different sensors detect cars driving in and out. This enables application to show fill rate of parking and also show if there are\n" +
            "\n" +
            "any available e-car charging stations at the rooftop of P10.  For new ideas please contact: mikael.lindblad@nokia.com",
        liveUtilization: "Live Utilization",
        insideLevelsP5: "Inside levels of P5",
        insideLevels: "Inside levels",
        roofTopLevels: "Rooftop level",
        roofTopElectricPlaces: "Rooftop electric places (est)",
        p10MapAlt: "P10 Map",
        p5MapAlt:"P5 Map",
        map: "Map",
        p10electric: "P10 Rooftop Electric (est.)",
        p10inside: "P10 Inside",
        p10rooftop:"P10 Rooftop",
        p5inside: "P5 Inside",
        fillRate: "Fill Rate",
        resetToken:"Reset Token",
        resetPasswordText: "Enter the Email, New Password and the Reset Token you got to change to a new Password",
        inside:"Inside",
        rooftop:"Rooftop",
        electric: "Electric(est.)",
        p10insideutil: "Inside Utilization",
        p10rooftoputil:"Rooftop Utilization",
        p10electricutil:"Electric Utilization(est.)",
        level:"Level",
        passwordWasReset: "Password changed successfully",
        requestError: "Something went wrong with your request. Please try again.",
        graph: "Graph",
        verificationToken: "Verification Token",
        resend: "Resend Verification Email",
        passwordLengthError: "Password must be at least 5 characters long",
        cannotBeEmpty: "Field cannot be blank",
        userVerification: "Use the verification code you have received in your email. If it has not arrived in the inbox be sure to check deleted/spam folder.",
        sentVerification: "You can now check your email for a verification code.",
        registeringSuccess: "Registration was successful. The verification code has been sent to your email",
        toConfirmation: "Account Confirmation",
        toPasswordReset: "To password reset",
        lines: "Lines",
        donut: "pie",
        currentStatsAre: "Current campus statistics are:"

    },

    fi:{
        signIn: "Kirjaudu",
        signUp: "Rekisteröidy",
        emailAddress: "Sähköposti",
        username: "Käyttäjänimi",
        password: "Salasana",
        confirmPassword: "Varmista salasana",
        rememberMe: "Muista minut",
        forgotPass: "Unohtuiko salasana?",
        noAccount: "Ei käyttäjätiliä? Rekisteröidy",
        welcome: "Tervetuloa MyCampus-sovellukseen, joka tarjoaa tietoa Nokian Karamalmin kampuksen P5 ja P10 -parkkitilojen, sekä ravintolan käyttötilanteesta.",
        logoAlt: "MyCampus Logo",
        validEmail: "Syötä sähköposti",
        enterEmail: "Syötä sähköposti jonka salasanan tahdot resetoida ja paina lähetä",
        send: "Lähetä",
        backToLogin:"Takaisin Kirjautumiseen",
        joinPlatform: "Liity Nokia MyCampus -alustalle",
        usernameError: "Käyttäjänimen tulee olla 2-20 merkkiä pitkä",
        passwordError: "Salasanat eivät täsmää",
        pleaseEnterEmail: "Syötä sähköposti",
        pleaseEnterConfirmPass: "Syötä salasanan vahvistus",
        pleaseEnterPassword: "Syötä salasana",
        pleaseEnterUsername: "Syötä käyttäjänimi",
        pleaseEnterName: "Syötä nimi",
        waitTime1: "jonotusaika < 30s",
        waitTime2: "jonotusaika < 1m",
        waitTime3: "jonotusaika < 1m 30s",
        waitTime4: "jonotusaika < 2m",
        waitTime5: "jonotusaika > 2m",
        restaurantPageTitle: "Jonotusajat",
        p10PageTitle: "P10",
        live: "Live",
        history: "Vanha Data",
        topBarMenuItemHome: "Koti",
        topBarMenuItemRestaurant: "Ravintola",
        topBarMenuItemP5: "P5",
        topBarMenuItemP10: "P10",
        topBarMenuItemLogout: "Kirjaudu Ulos",
        infoPageHeading: "MyCampus on Nokian työntekijöille tarkoitettu sovellus, joka tarjoaa tiettyä dataa Nokian Espoon kampukselta. Levitezer-niminen startup, yhteistyössä Nokian kanssa,"+
        "on ollut tekemässä MyCampusta. Opiskelijat Metropolia Ammattikorkeakoulusta ovat olleet tekemässä mobiilisovellusta.",
        infoPageP1: "Lämpökameroiden sensorit kattavat keskikohdan henkilöstöravintolan. Sovellus tarjoaa käyttöasteen, jonojen pituudet sekä historiallista dataa ravintolasta. " +
            "Parkkipaikoilla P5 ja P10, monet eri sensorit havaitsevat sisään ja ulos ajavat autot. Sovellus pystyy tämän avulla näyttämään täyttöasteen " +
            "sekä myös vapaana olevat sähköauton latauspisteet P10:n katolla.",
        infoPageP2:
            "Jos sinulla on uusia ideoita, ota yhteyttä: mikael.lindblad@nokia.com.",
        liveUtilization: "Nykyinen käyttöaste",
        insideLevelsP5: "P5:n sisätilan tasot",
        insideLevels: "Sisätilan tasot",
        roofTopLevels: "Kattotaso",
        roofTopElectricPlaces: "Sähköpaikat katolla (arvio)",
        p10MapAlt: "P10 Kartta",
        p5MapAlt:"P5 Kartta",
        map: "Kartta",
        p10electric: "P10 Sähköpaikat (arvio)",
        p10inside: "P10 Sisätaso",
        p10rooftop:"P10 kattotaso",
        p5inside: "P5 Sisätaso",
        fillRate: "Täyttöaste",
        resetToken: "Nollaus Koodi",
        resetPasswordText: "Syötä sähköposti, uusi salasanasi sekä koodi jonka sait sähköpostiisi vaihtaaksesi salasanasi",
        inside:"Sisätaso",
        rooftop:"Kattotaso",
        electric: "Sähköpaikat (arvio)",
        p10insideutil: "Sisätason käyttöaste",
        p10rooftoputil:"Kattotason käyttöaste",
        p10electricutil:"Sähköpaikat käyttöaste (arvio)",
        level:"Taso",
        graph: "Graafi",
        passwordWasReset: "Salasanan vaihto onnistui!",
        requestError: "Jokin meni pieleen pyynnössä. Yritä Uudelleen",
        verificationToken: "Vahvistustunnus",
        resend: "Lähetä Vahvistussähköposti Uudelleen",
        userVerification: "Käytä vahvistuskoodiasi täällä. Vahvistuskoodin pitäisi löytyä sähköpostistasi. Muista tarkistaa myös poistetut / roskapostikansio, jos viesti ei näy pääkansiossa",
        sentVerification: "Vahvistuskoodi lähetetty sähköpostiin.",
        passwordLengthError:"Salasanan tulee olla vähintään 5 merkkiä",
        cannotBeEmpty: "Kenttä ei saa olla tyhjä",
        registeringSuccess:"Rekisteröinti onnistui, vahvistuskoodin on lähetetty sähköpostiinne",
        toConfirmation:"Tilin vahvistus",
        toPasswordReset: "Salasanan palautukseen",
        lines: "Linjasto",
        donut: "piirakka",
        currentStatsAre:"Tämän hetken tilastot kampuksella:"
    },

    se:{
        signIn: "Logga In",
        signUp: "Logga Up",
        emailAddress: "Epostadress",
        username: "Användarnamn",
        password: "Lösenord",
        confirmPassword: "Bekräfta Lösenordet",
        rememberMe: "Kom ihåg mig",
        forgotPass: "Glömt Lösenordet?",
        noAccount: "Skapa ett nytt konto",
        welcome: "Välkommen till progressiva web applicationen som erbjudar information av de tre mäst populära områden på Nokia HQ, Espoo",
        logoAlt: "MyCampus Logo",
        validEmail: "Ange en giltig e-postadress",
        enterEmail: "Ange e-postadressen vart du vill ha lösenord återställt och tryck skicka",
        send: "Skicka",
        joinPlatform: "Gå med Nokia MyCampus platform",
        backToLogin: "Tillbaka till Login",
        usernameError: "Användarnamnet måste vara mellan 2-20 tecken",
        passwordError: "Lösenordet matchar inte",
        pleaseEnterEmail: "Ange en giltig epostadress",
        pleaseEnterConfirmPass: "Ange lösenordet igen",
        pleaseEnterPassword: "Ange lösenord",
        pleaseEnterName: "Ange ett namn",
        waitTime1: "väntetid < 30s",
        waitTime2: "väntetid < 1m",
        waitTime3: "väntetid < 1m 30s",
        waitTime4: "väntetid < 2m",
        waitTime5: "väntetid > 2m",
        restaurantPageTitle: "Kötider",
        p10PageTitle: "P10",
        live: "Live",
        history: "Historia",
        pleaseEnterUsername: "Ange ett användarnamn",
        topBarMenuItemHome: "Hem",
        topBarMenuItemRestaurant: "Restaurang",
        topBarMenuItemP5: "P5",
        topBarMenuItemP10: "P10",
        topBarMenuItemInfo: "Info",
        topBarMenuItemLogout: "Logga ut",
        infoPageHeading: "MyCampus är en applikation för Nokia anställda som visar specifik data från Esbo Nokia Kampus.\n" +
            "    Start up nämned Levitezer i samarbete med Nokia har skapat MyCampus.\n" +
            "    Studerande från Metropolia University of Applied Sciences har varit med i skapandet av mobil applikationen",
        infoPageP1: "Värmekamerasensorer täcker centern av anställdas restaurang. I applikationen finns det utnyttjandegrad, "+
                "kötidslängd och historisk data för användning för restaurangen är tillgängliga.",
        infoPageP2: "Vid parkering P5 och P10 upptäcker flera olika sensorer bilar som kör in och ut. Detta möjliggör applikation\n" +
            "för att visa fyllningshastighet för parkering och även visa om det finns \n " +
            "tillgängliga laddningsstationer för e-bilar på taket av P10. För nya idéer kontakta: mikael.lindblad@nokia.com\",",
        liveUtilization: "Live Utilization",
        insideLevelsP5: "Inre nivå av P5",
        insideLevels: "Inre nivåer",
        roofTopLevels: "Tak nivå",
        roofTopElectricPlaces: "Tak elektriska platser (uppskatning)",
        p10MapAlt: "P10 Karta",
        p5MapAlt:"P5 Karta",
        map: "Karta",
        p10electric: "P10 Tak elektriska(est)",
        p10inside: "P10 Inre nivåer",
        p10rooftop:"P10 Tak nivå",
        p5inside: "P5 Inre nivåer",
        fillRate: "Fyllnadsgrad",
        resetToken:"Återställnings tecken",
        resetPasswordText: "Ange e-postadresset, nya lösenordet och the återställnings tecken du fick för att byta lösenordet.",
        inside:"Inuti",
        rooftop:"Tak",
        electric: "Elektrisk(uppskatning)",
        p10insideutil: "Inre Användning",
        p10rooftoputil:"Tak Användning",
        p10electricutil:"Elektriska Användning(uppskatning)",
        level:"Nivå",
        graph: "Graf",
        verificationToken: "Verifikations Tecken",
        resend: "Återsänd Verifikations eposten",
        userVerification: "Använd verifikations koden du fått via epost. Kolla deleterade/spam foldern om du inte har fått eposten i inkorgen. ",
        sentVerification: "Verifikations koden har skickats till er epost.",
        passwordLengthError:"Lösenorder måste vara minst 5 tecken lång",
        cannotBeEmpty:"Fältet kan inte vara tom",
        registeringSuccess:"Registeringen lyckades, verifikations koden har sänts till er epost",
        toConfirmation:"Konto Konfirmation",
        toPasswordReset: "Till lösenord återställning",
        lines: "Linjer",
        donut: "asdf",
        currentStatsAre:"Nuvarande statistik på kampus:"
    }
});

export default strings;
