const inputDay = document.getElementById("Day")
        const inputMonth = document.getElementById("Month")
        const inputYear = document.getElementById("Year")
        const button = document.getElementById("button")
        const reday = document.querySelector(".result-day")
        const remonth = document.querySelector(".result-month")
        const reyear = document.querySelector(".result-years")
        const input = document.querySelectorAll(".input")
        const currentDate = new Date
       /* const currentMonth = currentDate.getMonth()
        const currentDay = currentDate.getDay() */
        const currentYear = currentDate.getFullYear()

        button.addEventListener("click" ,()=>{
           let userDay = 31 - inputDay.value
          // inputDay.value = " "
           let userMonth = 12 - inputMonth.value
           //inputMonth.value = " "
           let userYear = currentYear - inputYear.value
          // inputYear.value = " "
          reday.innerHTML = userDay + " -"+ "Day"
          remonth.innerHTML = userMonth + " -"+ "Month"
          reyear.innerHTML = userYear + " -"+ "Year"
          userYear = 0
          userMonth = 0
          userDay = 0
          if( userYear === 0 || userMonth === 0|| userDay === 0){
              console.log("enter something")
          }
          inputDay.value = " "
          inputMonth.value = " "
          inputYear.value = " "
        })