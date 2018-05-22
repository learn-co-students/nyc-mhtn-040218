const BenJStore = (
    function() {
        let numberOfPeopleWeMadeSoSoHappy = 0
        const iceCreams = {
            vanilla:['vanilla'],
            chunckyMonkey:['vanilla','chocolate','banana']
        }

        class BenAndJerry {
            constructor(name) {
                console.log(++numberOfPeopleWeMadeSoSoHappy)
                this.name = name
                this.ingredients = [...iceCreams[name]] //revisit this
            }
        }



        function makeIceCream(name) {
            const iceCream = new BenAndJerry(name)
            return iceCream
        }

        function order(name) {
            return makeIceCream(name)
        }

        const publicApi = {
            order:order
        }

        return publicApi
    }
)()
