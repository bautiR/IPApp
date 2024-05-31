const OPTIONS = {
    method: 'GET',
    params: {
        risk: 'true',
        hostname: 'false'
    },
    headers: {
        'X-RapidAPI-Key': '374b9bef8dmsh84056f39f796703p17b9ddjsn726810919d50',
        'X-RapidAPI-Host': 'ip-directory.p.rapidapi.com'
    }
    };

    const fetchIpInfo = ip => {
        return fetch(`https://ip-directory.p.rapidapi.com/lookup/${ip}`, OPTIONS)
        .then(res => res.json())
        .catch(err => console.error(err))
    }

    const form = document.querySelector('#form')
    const input = document.querySelector('#input')
    const submit = document.querySelector('#submit')
    const results = document.querySelector('#results')


    form.addEventListener('submit', async (event)=>{
        event.preventDefault()
        const {value} = input;
        if(!value) return

        submit.setAttribute('disabled', '')
        submit.setAttribute('aria-busy', 'true')

        const ipInfo = await fetchIpInfo(value)

        if(ipInfo){
            results.innerHTML= JSON.stringify(ipInfo, null, 2)
        }

        submit.removeAttribute('disabled')
        submit.removeAttribute('aria-busy')
    })