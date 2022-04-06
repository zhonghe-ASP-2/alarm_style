console.log(tot_records);
        if(tot_records == 1){
            setInterval(\"changeColor('blink-"+String(tot_records)+"')\",2000);\
            console.log( "<img src='https://t1.picb.cc/uploads/2021/11/11/wKluzG.png' width='20px' height = '20px' id='blink-"+String(tot_records)+"' ></img>\
                <script language='javascript'>\
                    var cnt = [];\
                    function changeColor(element_id){\
                        id_number = parseInt(element_id.split('-')[1]);\
                        if(id_number == 1){\
                            console.log(id_number);\
                        }\
                        while(id_number > cnt.length-1){\
                            cnt.push(0);\
                        }\
                        if(cnt[id_number]%2 == 0){\
                            document.getElementById(element_id).src = '';\
                        }\
                        else{\
                            document.getElementById(element_id).src = 'https://t1.picb.cc/uploads/2021/11/11/wKluzG.png';\
                        }\
                        cnt[id_number] += 1;\
                    }\
                    setInterval(\"changeColor('blink-"+String(tot_records)+"')\",2000);\
                </script>\
                \
                ");
            return "<img src='https://t1.picb.cc/uploads/2021/11/11/wKluzG.png' width='20px' height = '20px'  id='blink-"+String(tot_records)+"'></img>\
                <script language='javascript'>\
                    var cnt = [];\
                    function changeColor(element_id){\
                        id_number = parseInt(element_id.split('-')[1]);\
                        if(id_number == 1){\
                            console.log(id_number);\
                        }\
                        while(id_number > cnt.length-1){\
                            cnt.push(0);\
                        }\
                        if(cnt[id_number]%2 == 0){\
                            document.getElementById(element_id).src = '';\
                        }\
                        else{\
                            document.getElementById(element_id).src = 'https://t1.picb.cc/uploads/2021/11/11/wKluzG.png';\
                        }\
                        cnt[id_number] += 1;\
                    }\
                    setInterval(\"changeColor('blink-"+String(tot_records)+"')\",2000);\
                </script>\
                \
                ";
        }
        else{
            console.log( "<img src='https://t1.picb.cc/uploads/2021/11/11/wKluzG.png' id='blink-"+String(tot_records)+"' width='20px' height = '20px'></img>\
            <script language='javascript'>\
                setInterval(\"changeColor('blink-"+String(tot_records)+"')\",2000);\
            </script>");
            return "<img src='https://t1.picb.cc/uploads/2021/11/11/wKluzG.png' id='blink-"+String(tot_records)+"' width='20px' height = '20px'></img>\
            <script language='javascript'>\
                setInterval(\"changeColor('blink-"+String(tot_records)+"')\",2000);\
            </script>";
        }