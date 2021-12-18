"use strict";


/* Encapsulation of the code */

let encap = (function() {


    /* Declaring global variables only in this scope */

    let selectMenu = 0;
    let cardData;
    let nameData;
    let birthDateData;
    let addressData;
    let emailData;
    let telData;
    let initialDateData;
    let statusCode;
    let urlData;
    let nextId = 0;
    let newDataId = 0;
    let delStat = true;
    let mailctrl = true;
    let flashingColor;
    let flashingColorRun = false;


    /* Menu select - appearance */

    $(".data1").slideUp(0);
    $(".menu11, .menu12, .menu13, .menu14").hover(function() {
        $(this).css("background-color", "#ffdb99");
        $(this).css("font-size", "12pt");
    }, function() {
        $(this).css("background-color", "#ffc14d");
        $(this).css("font-size", "10pt");
    });
    $(".menu11").click(function() {
        selectMenu = 1;
        $(".data1").slideUp(0);
        $(".data1").slideDown(0);
        $("#cardNumberInput").show();
        $("#name, #birthDate, #address, #email, #tel, #initialDate").show().css("background-color", "#FFDEAD");
        $("#cardNumber, #nameInput, #birthDateInput, #addressInput, #emailInput, #telInput, #initialDateInput").hide();
        $(".data18").hide();
        $(".data10, .data11, .data12, .data13, .data14, .data15, .data16, .data17").show().css("background-color", "#FFA500");
        let d10 = $(".111").text();
        $(".data10").text(d10);
        $(".data10").css("font-size", "20pt");
        $("#cardNumber").css("background-color", "#ffffff");
        delStat = true;
    });
    $(".menu12").click(function() {
        selectMenu = 2;
        $(".data1").slideUp(0);
        $(".data1").slideDown(0);
        $(".data10, .data11, .data12, .data13, .data14, .data15, .data16, .data17, .data18").show().css("background-color", "#32CD32");
        $("#cardNumber, #nameInput, #birthDateInput, #addressInput, #emailInput, #telInput, #initialDateInput").show();
        $("#cardNumberInput, #name, #birthDate, #address, #email, #tel, #initialDate").hide();
        let d10 = $(".112").text();
        $(".data10").text(d10);
        $(".data10").css("font-size", "20pt");
        $("#name, #birthDate, #address, #email, #tel").css("background-color", "#ffffff");
        $("#cardNumber, #initialDate").css("background-color", "#FFDEAD");
        $("#cardNumber").text($("#cardNumberInput").val());
        $("#nameInput").val(nameData);
        $("#birthDateInput").val(birthDateData);
        $("#addressInput").val(addressData);
        $("#emailInput").val(emailData);
        $("#telInput").val(telData);
        $("#initialDateInput").val(initialDateData);
        $(".data18").tooltip({
            position: { my: "bottom", at: "top-20" },
            show: { effect: "bounce", duration: 300, easing: "easeOutQuad", delay: 0 },
        });
        let outWidth = $(".main").outerWidth();
        if (outWidth > 600) {
            $(".data18").tooltip("enable");
        } else {
            $(".data18").tooltip("disable");
        }
        clearTimeout(flashingColor);
        $("#emailInput").css("background-color", "#ffffff");
        delStat = true;
    });
    $(".menu13").click(function() {
        selectMenu = 3;
        $(".data1").slideUp(0);
        $(".data1").slideDown(0);
        $(".data10, .data11, .data12, .data13, .data14, .data15, .data16, .data17, .data18").show().css("background-color", "#87CEFA");
        $("#cardNumberInput, #name, #birthDate, #address, #email, #tel, #initialDate").hide();
        $("#cardNumber, #nameInput, #birthDateInput, #addressInput, #emailInput, #telInput, #initialDateInput").show();
        let d10 = $(".113").text();
        $(".data10").text(d10);
        $(".data10").css("font-size", "20pt");
        $("#name, #birthDate, #address, #email, #tel, #initialDate").css("background-color", "white");
        $("#cardNumber").css("background-color", "#FFDEAD");
        $("#nameInput, #birthDateInput, #addressInput, #emailInput, #telInput, #initialDateInput").val("");
        $(".data18").tooltip({
            position: { my: "bottom", at: "top-20" },
            show: { effect: "bounce", duration: 300, easing: "easeOutQuad", delay: 0 },
        });
        let outWidth = $(".main").outerWidth();
        if (outWidth > 600) {
            $(".data18").tooltip("enable");
        } else {
            $(".data18").tooltip("disable");
        }
        clearTimeout(flashingColor);
        $("#emailInput").css("background-color", "#ffffff");
        delStat = true;
    });
    $(".menu14").click(function() {
        selectMenu = 4;
        $(".data1").slideUp(0);
        $(".data1").slideDown(0);
        $(".data10, .data11, .data12, .data13, .data18").show().css("background-color", "#ff4d4d");
        $("#name, #birthDate").show().css("background-color", "#ffb3b3");
        $("#cardNumberInput").show().css("background-color", "#ffffff");
        $(".data14, .data15, .data16, .data17").hide();
        $(".data18").show();
        $("#cardNumber, #nameInput, #birthDateInput").hide();
        let d10 = $(".114").text();
        $(".data10").text(d10);
        $(".data10").css("font-size", "20pt");
        $(".data18").tooltip({
            disabled: "true"
        });
    });


    /* Defining messages and alerts */

    $(".main").after("<div id='mainMessage'>Üdvözöljük Önt a Demo Kft. törzsvásárlói kártyakezelő rendszerében! Ez a verzió minta adatokat tartalmaz, a kártyaszámok intervalluma: 1001-1015!<br><br>( Kattintson az X-re az ablak bezárásához! )</div>");
    $("#mainMessage").dialog({
        width: 350,
        height: 260,
        draggable: false,
        resizable: false
    });

    function serverError() {
        $(".main").hide();
        $("#serverErrorMessage").dialog({
            width: 350,
            height: 250,
            draggable: false,
            resizable: false
        });
    }

    function successfullyModifySend() {
        $("#successfulModifySendMessage").dialog({
            width: 350,
            height: 150,
            draggable: false,
            resizable: false
        });
        $(".data18").tooltip("disable");
    }

    function successfullySendNewCard() {
        $("#successfulNewCardMessage").dialog({
            width: 350,
            height: 150,
            draggable: false,
            resizable: false
        });
        $(".data18").tooltip("disable");
    }

    function successfullyDelete() {
        $("#successfulDeleteMessage").dialog({
            width: 350,
            height: 150,
            draggable: false,
            resizable: false
        });
    }

    $(".main").after("<div id='serverErrorMessage' title='FIGYELMEZTETÉS!!!'><b>KOMMUNIKÁCIÓS HIBA!!!!!<br><br>A szerver nem érhető el adatátviteli hiba miatt (vagy nem működik)!!!<br>Emiatt jelenleg nem használható a kártyakezelő rendszer!!!</b></div>");
    $("#serverErrorMessage").hide();

    $(".main").after("<div id='emptyMessage' title='FIGYELMEZTETÉS!!!'>Minden mező kitöltése kötelező!!!<br>Kérem, töltse ki a hiányzó adatokat és kattintson ismét az 'OK' gombra!!!</div>");
    $("#emptyMessage").hide();

    $(".main").after("<div id='successfulModifySendMessage' title='ADATMÓDOSÍTÁS!!!'>Az adatok küldése a szervernek rendben megtörtént, a módosított kártya adatok rögzítve vannak!!!</div>");
    $("#successfulModifySendMessage").hide();

    $(".main").after("<div id='successfulNewCardMessage' title='ÚJ KÁRTYA RÖGZÍTÉSE!!!'>Az adatok küldése a szervernek rendben megtörtént, az új kártya adatai rögzítve vannak!!!</div>");
    $("#successfulNewCardMessage").hide();

    $(".main").after("<div id='successfulDeleteMessage' title='ADATTÖRLÉS!!!'>A törlési kérelem küldése a szervernek rendben megtörtént, a kártya adatai törlésre kerültek!!!</div>");
    $("#successfulDeleteMessage").hide();

    $(".main").after("<div id='delMessage' title='FIGYELMEZTETÉS!!!'><b>A kártya adatainak a végleges törlését kezdeményezte!<br>Valóban törölni akarja a rendszerből a kiválasztott kártyát???<br>Ha biztos benne, akkor zárja be ezt az ablakot és kattintson még egyszer az 'OK' gombra!!!</b></div>");
    $("#delMessage").hide();


    /* Retrieve card data from the server */

    function errorHandling() {
        if (statusCode === 404) {
            $("#name").text("Érvénytelen kártyaszám!!!");
            $("#birthDate").text("---");
            $("#address").text("---");
            $("#email").text("---");
            $("#tel").text("---");
            $("#initialDate").text("---");
            nameData = $("#name").text();
            birthDateData = $("#birthDate").text();
            addressData = $("#address").text();
            emailData = $("#email").text();
            telData = $("#tel").text();
            initialDateData = $("#initialDate").text();
        } else if (statusCode === 0) {
            serverError();
        } else {
            alert("System error!!!");
        }
    }

    function displayWrite() {
        $("#name").text(cardData.name);
        $("#birthDate").text(cardData.birthDate);
        $("#address").text(cardData.address);
        $("#email").text(cardData.email);
        $("#tel").text(cardData.tel);
        $("#initialDate").text(cardData.initialDate);
        nameData = $("#name").text();
        birthDateData = $("#birthDate").text();
        addressData = $("#address").text();
        emailData = $("#email").text();
        telData = $("#tel").text();
        initialDateData = $("#initialDate").text();
    }

    function clearing() {
        $("#name, #birthDate, #address, #email, #tel, #initialDate").text("");
    }

    function clearingNextData() {
        $("#nameInput, #birthDateInput, #addressInput, #emailInput, #telInput, #initialDateInput").val("");
    }

    function question() {
        clearing();
        let cardNumber = parseInt($("#cardNumberInput").val());
        urlData = "http://localhost:3000/cards/" + cardNumber;
        let dataRequest = $.ajax({
                method: "GET",
                url: urlData,
                cache: "false",
                dataType: "JSON"
            })
            .done(function() {
                cardData = dataRequest["responseJSON"],
                    displayWrite();
            })
            .fail(function(xhr) {
                statusCode = xhr.status,
                    errorHandling();
            });
    }


    /* Generate a new card number */

    function idCalling() {
        urlData = "http://localhost:3000/serialNumber/1/";
        let dataRequest = $.ajax({
                method: "GET",
                url: urlData,
                cache: "false",
                dataType: "JSON",
                error: function() {
                    serverError();
                }
            })
            .done(function() {
                newDataId = dataRequest["responseJSON"]["recent"];
            })
            .done(function() {
                $("#cardNumber").text(newDataId);
                nextIdGenerate();
            });
    }

    $(".menu13").click(function() {
        if (newDataId == 0) {
            idCalling();
        } else {
            $("#cardNumber").text(nextId);
        }
    });

    function nextIdGenerate() {
        nextId = parseInt(newDataId);
        newDataId = nextId + 1;
        urlData = "http://localhost:3000/serialNumber/1/";
        $.ajax({
            method: "PUT",
            url: urlData,
            cache: "false",
            data: {
                recent: newDataId
            },
            error: function() {
                serverError();
            }
        });
    }


    /* Validation */

    function mailControl() {
        flashingColor = setTimeout(function() {
            if (mailctrl === true) {
                $("#emailInput").css("background-color", "#ffb3b3");
                mailctrl = false;
            } else {
                $("#emailInput").css("background-color", "#ffffff");
                mailctrl = true;
            }
            mailControl();
        }, 200);
    }

    function mailvalid() {
        clearTimeout(flashingColor);
        let m = $("#emailInput").val();
        let m1 = m.includes("@");
        let m2 = m.includes(".");
        if (m1 === false || m2 === false) {
            mailControl();
            flashingColorRun = true;
        } else {
            clearTimeout(flashingColor);
            $("#emailInput").css("background-color", "#ffffff");
            flashingColorRun = false;
        }
    }


    /* Performing functions */

    function menuSwitch() {
        switch (selectMenu) {
            case 1:
                break;
            case 2:
                let dataModify = parseInt($("#cardNumberInput").val());
                urlData = "http://localhost:3000/cards/" + dataModify;
                $.ajax({
                        method: "PUT",
                        url: urlData,
                        cache: "false",
                        data: {
                            id: dataModify,
                            name: $("#nameInput").val(),
                            birthDate: $("#birthDateInput").val(),
                            address: $("#addressInput").val(),
                            email: $("#emailInput").val(),
                            tel: $("#telInput").val(),
                            initialDate: $("#initialDateInput").val()
                        },
                        error: function() {
                            serverError();
                        }
                    })
                    .done(function() {
                        successfullyModifySend();
                        question();
                    });
                break;
            case 3:
                urlData = "http://localhost:3000/cards/";
                $.ajax({
                        method: "POST",
                        url: urlData,
                        cache: "false",
                        data: {
                            id: nextId,
                            name: $("#nameInput").val(),
                            birthDate: $("#birthDateInput").val(),
                            address: $("#addressInput").val(),
                            email: $("#emailInput").val(),
                            tel: $("#telInput").val(),
                            initialDate: $("#initialDateInput").val()
                        },
                        error: function() {
                            serverError();
                        }
                    })
                    .done(function() {
                        clearingNextData();
                        idCalling();
                        successfullySendNewCard();
                    });
                break;
            case 4:
                if (delStat === true) {
                    $("#delMessage").dialog({
                        width: 350,
                        height: 250,
                        draggable: false,
                        resizable: false
                    });
                    delStat = false;
                } else {
                    let deleteData = parseInt($("#cardNumberInput").val());
                    urlData = "http://localhost:3000/cards/" + deleteData;
                    $.ajax({
                            method: "PUT",
                            url: urlData,
                            cache: "false",
                            data: {
                                id: deleteData,
                                name: "TÖRÖLT KÁRTYA!!!",
                                birthDate: "---",
                                address: "---",
                                email: "---",
                                tel: "---",
                                initialDate: "---"
                            },
                            error: function() {
                                serverError();
                            }
                        })
                        .done(function() {
                            successfullyDelete();
                            question();
                        });
                    delStat = true;
                }
                break;
        }
    }


    /* Send button click */

    $("#dataSend").click(function() {
        let nameInputBlank = $("#nameInput").val();
        let nameBlank = nameInputBlank.length;
        let birthDateInputBlank = $("#birthDateInput").val();
        let birthDateBlank = birthDateInputBlank.length;
        let addressInputBlank = $("#addressInput").val();
        let addressBlank = addressInputBlank.length;
        let emailInputBlank = $("#emailInput").val();
        let emailBlank;
        if (flashingColorRun === true) {
            emailBlank = 0;
        } else {
            emailBlank = emailInputBlank.length;
        }
        let telInputBlank = $("#telInput").val();
        let telBlank = telInputBlank.length;
        let initialDateInputBlank = $("#initialDateInput").val();
        let initialDateBlank = initialDateInputBlank.length;

        if (selectMenu === 2 || selectMenu === 3) {
            if (nameBlank === 0 || birthDateBlank === 0 || addressBlank === 0 || emailBlank === 0 || telBlank === 0 || initialDateBlank === 0) {
                $("#emptyMessage").dialog({
                    width: 350,
                    height: 150,
                    draggable: false,
                    resizable: false
                });
                $(".data18").tooltip({
                    disabled: true
                });
            } else {
                menuSwitch();
            }
        } else {
            menuSwitch();
        }
    });


    /* Date window format */

    $("#birthDateInput, #initialDateInput").datepicker({
        dateFormat: "yy-mm-dd",
        monthNamesShort: ["Jan", "Feb", "Márc", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szept", "Okt", "Nov", "Dec"],
        dayNamesMin: ["Vas", "Hé", "Ke", "Sze", "Cs", "Pé", "Szo"],
        firstDay: 1,
        showMonthAfterYear: true,
        changeMonth: true,
        changeYear: true,
        yearRange: "1920:2020",
        showWeek: true,
        weekHeader: "#",
        showButtonPanel: false
    });


    /* Closure (IIFE --->>> return) */

    return {
        getQuestion: () => {
            return question();
        },
        getMailValid: () => {
            return mailvalid();
        },
    };

})();