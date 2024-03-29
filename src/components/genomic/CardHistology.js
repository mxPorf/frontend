import PieChart from "../PieChart";

export default function CardHistology(){
    const data = {
        labels: ['small-cell lung cancer', 'nonsmall cell lung cancer, adenocarcino', 'nonsmall cell lung cancer,squamous cell carcinoma'],
        datasets: [
          {
            label: 'Quantity',
            data: [128, 199, 100],
            backgroundColor: [
              '#f88508', 
              '#dc3912',
              '#718cf1',
            ],
            borderColor: [
            '#f88508', 
            '#dc3912',
            '#718cf1',
            ],
            borderWidth: 1,
          },
        ],
      };
    return(
        <div className="card">
        <div className="aboutChart">
            <PieChart chartData={data} />
        </div>
        <h3>Histology</h3>
        </div>
    )
}