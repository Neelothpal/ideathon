const data = {
    station1: [
        { name: 'Day 1', gen: 500, used: 200, daily: 550, pv: 2400, amt: 2400 },
        { name: 'Day 2', gen: 300, used: 100, daily: 550, pv: 1398, amt: 2210 },
        { name: 'Day 3', gen: 200, used: 80, daily: 550, pv: 9800, amt: 2290 },
        { name: 'Day 4', gen: 278, used: 40, daily: 550, pv: 3908, amt: 2000 },
        { name: 'Day 5', gen: 189, used: 170, daily: 550, pv: 4800, amt: 2181 },
        { name: 'Day 6', gen: 239, used: 200, daily: 550, pv: 3800, amt: 2500 },
        { name: 'Day 7', gen: 349, used: 330, daily: 550, pv: 4300, amt: 2100 },
        { name: 'Day 8', gen: 189, used: 150, daily: 550, pv: 4800, amt: 2181 },
        { name: 'Day 9', gen: 239, used: 130, daily: 550, pv: 3800, amt: 2500 },
        { name: 'Day 10', gen: 239, used: 220, daily: 550, pv: 3800, amt: 2500 }
    ],
    station2: [
        { name: 'Day 1', gen: 550, used: 210, daily: 480, pv: 2500, amt: 2450 },
        { name: 'Day 2', gen: 320, used: 120, daily: 480, pv: 1420, amt: 2240 },
        { name: 'Day 3', gen: 210, used: 85, daily: 480, pv: 9850, amt: 2300 },
        { name: 'Day 4', gen: 290, used: 50, daily: 480, pv: 3920, amt: 2020 },
        { name: 'Day 5', gen: 200, used: 180, daily: 480, pv: 4850, amt: 2200 },
        { name: 'Day 6', gen: 245, used: 210, daily: 480, pv: 3850, amt: 2550 },
        { name: 'Day 7', gen: 355, used: 340, daily: 480, pv: 4350, amt: 2150 },
        { name: 'Day 8', gen: 200, used: 160, daily: 480, pv: 4850, amt: 2200 },
        { name: 'Day 9', gen: 245, used: 140, daily: 480, pv: 3850, amt: 2550 },
        { name: 'Day 10', gen: 245, used: 230, daily: 480, pv: 3850, amt: 2550 }
    ],
    station3: [
        { name: 'Day 1', gen: 600, used: 250, daily: 430, pv: 2600, amt: 2500 },
        { name: 'Day 2', gen: 340, used: 140, daily: 430, pv: 1450, amt: 2270 },
        { name: 'Day 3', gen: 220, used: 90, daily: 430, pv: 9900, amt: 2310 },
        { name: 'Day 4', gen: 300, used: 60, daily: 430, pv: 3940, amt: 2040 },
        { name: 'Day 5', gen: 210, used: 190, daily: 430, pv: 4900, amt: 2220 },
        { name: 'Day 6', gen: 250, used: 220, daily: 430, pv: 3900, amt: 2600 },
        { name: 'Day 7', gen: 360, used: 350, daily: 430, pv: 4400, amt: 2200 },
        { name: 'Day 8', gen: 210, used: 170, daily: 430, pv: 4900, amt: 2220 },
        { name: 'Day 9', gen: 250, used: 150, daily: 430, pv: 3900, amt: 2600 },
        { name: 'Day 10', gen: 250, used: 240, daily: 430, pv: 3900, amt: 2600 }
    ],
    station4: [
        { name: 'Day 1', gen: 650, used: 270, daily: 220, pv: 2700, amt: 2550 },
        { name: 'Day 2', gen: 360, used: 160, daily: 220, pv: 1480, amt: 2300 },
        { name: 'Day 3', gen: 230, used: 100, daily: 220, pv: 9950, amt: 2320 },
        { name: 'Day 4', gen: 310, used: 70, daily: 220, pv: 3960, amt: 2060 },
        { name: 'Day 5', gen: 220, used: 200, daily: 220, pv: 4950, amt: 2240 },
        { name: 'Day 6', gen: 255, used: 230, daily: 220, pv: 3950, amt: 2650 },
        { name: 'Day 7', gen: 365, used: 360, daily: 220, pv: 4450, amt: 2250 },
        { name: 'Day 8', gen: 220, used: 180, daily: 220, pv: 4950, amt: 2240 },
        { name: 'Day 9', gen: 255, used: 160, daily: 220, pv: 3950, amt: 2650 },
        { name: 'Day 10', gen: 255, used: 250, daily: 220, pv: 3950, amt: 2650 }
    ],
    station5: [
        { name: 'Day 1', gen: 700, used: 290, daily: 320, pv: 2800, amt: 2600 },
        { name: 'Day 2', gen: 380, used: 180, daily: 320, pv: 1500, amt: 2330 },
        { name: 'Day 3', gen: 240, used: 110, daily: 320, pv: 10000, amt: 2330 },
        { name: 'Day 4', gen: 320, used: 80, daily: 320, pv: 3980, amt: 2080 },
        { name: 'Day 5', gen: 230, used: 210, daily: 320, pv: 5000, amt: 2260 },
        { name: 'Day 6', gen: 260, used: 240, daily: 320, pv: 4000, amt: 2700 },
        { name: 'Day 7', gen: 370, used: 370, daily: 320, pv: 4500, amt: 2300 },
        { name: 'Day 8', gen: 230, used: 190, daily: 320, pv: 5000, amt: 2260 },
        { name: 'Day 9', gen: 260, used: 170, daily: 320, pv: 4000, amt: 2700 },
        { name: 'Day 10', gen: 260, used: 260, daily: 320, pv: 4000, amt: 2700 }
    ]
};


export default data;