import { create } from "zustand";

const globalStore = create((set) => ({


    tiketFestival: 0,
    setTiketFestival: (e) => set({ tiketFestival: e }),

    tiketCosmos: 0,
    setTiketCosmos: (e) => set({ tiketCosmos: e }),

    tiketIrisA: 0,
    setTiketIrisA: (e) => set({ tiketIrisA: e }),

    tiketIrisB: 0,
    setTiketIrisB: (e) => set({ tiketIrisB: e }),

    tiketLotusA: 0,
    setTiketLotusA: (e) => set({ tiketLotusA: e }),

    tiketLotusB: 0,
    setTiketLotusB: (e) => set({ tiketLotusB: e }),

    idFestival: 0,
    setIdFestival: (e) => set({ idFestival: e }),

    idCosmos: 0,
    setIdCosmos: (e) => set({ idCosmos: e }),

    idIrisA: 0,
    setIdIrisA: (e) => set({ idIrisA: e }),

    idIrisB: 0,
    setIdIrisB: (e) => set({ idIrisB: e }),

    idLotusA: 0,
    setIdLotusA: (e) => set({ idLotusA: e }),

    idLotusB: 0,
    setIdLotusB: (e) => set({ idLotusB: e }),

    priceFestival: 0,
    setPriceFestival: (e) => set({ priceFestival: e }),

    priceCosmos: 0,
    setPriceCosmos: (e) => set({ priceCosmos: e }),

    priceIrisA: 0,
    setPriceIrisA: (e) => set({ priceIrisA: e }),

    priceIrisB: 0,
    setPriceIrisB: (e) => set({ priceIrisB: e }),

    priceLotusA: 0,
    setPriceLotusA: (e) => set({ priceLotusA: e }),

    priceLotusB: 0,
    setPriceLotusB: (e) => set({ priceLotusB: e }),

    jumlah: 0,
    setJumlah: (e) => set({ jumlah: e }),

    listPengunjung: [],
    addPengunjung: (e) => set({ listPengunjung: e }),

    dataUser: {},
    setDataUser: (e) => set({ dataUser: e }),

    tokenGlobal: "",
    setTokenGlobal: (e) => set({ tokenGlobal: e }),

    // dataTicket: [],
    // setDataTicket: (e) => set({ dataTicket: e })

    datatiketList: [],
    setDataTiketList: (e) => set({ datatiketList: e }),

    dataJumlahTiketPerJenis: {},
    setDataJumlahTiketPerJenis: (e) => set({ dataJumlahTiketPerJenis: e }),

    dataTotalTicket : 0,
    setDataTotalTicket: (e) => set({ dataTotalTicket: e }),

    dataTotalHarga : 0,
    setDataTotalHarga: (e) => set({ dataTotalHarga: e }),

    dataInitEvent: {},
    setDataInitEvent : (e) => set({ dataInitEvent: e }),

    promoEventStatus: false,
    setPromoEventStatus:(e) => set({ promoEventStatus: e }),

    promoLabel : "",
    setPromoLabel : (e) => set({promoLabel: e}),

    promoTerms : "",
    setPromoTerms : (e) => set({promoTerms: e}),

    eventchoice : {},
    setEventChoice : (e) => set({eventchoice : e})

    
}));

export default globalStore;