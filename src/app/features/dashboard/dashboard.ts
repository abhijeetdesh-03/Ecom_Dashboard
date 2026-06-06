import { Component, ElementRef, ViewChild, OnInit, effect } from '@angular/core';
import { SharedCards } from '../../shared/models/shared-cards';
import { analyticsCards } from '../../shared/data/analytics';
import { statsCards } from '../../shared/data/dashboard';
import { RECENT_ORDERS_TABLE } from '../../shared/data/recent_orders';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { ThemeService } from '../../shared/theme.service';


@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  dashboard: SharedCards[] = statsCards;
  recentOrdersColumns = RECENT_ORDERS_TABLE.columns;
  currentDate: string = '';
  isExporting = false;
  isHorizontalBar = false;

  constructor(private themeService: ThemeService) {
    effect(() => {
      const isDark = this.themeService.isDark();
      this.updateChartThemes(isDark);
    });
  }

  ngOnInit() {
    this.currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  }

  OrdersData = RECENT_ORDERS_TABLE.data;

  actions = [
    {
      icon: 'ri-eye-line',
      action: 'view'
    }
  ];
  // Sales Analytics Chart
  salesChart: any = {
    series: [
      {
        name: 'Revenue',
        data: [45000, 52000, 48000, 61000, 55000, 68000]
      }
    ],

    chart: {
      type: 'area',
      height: 380,
      toolbar: {
        show: false
      }
    },

    stroke: {
      curve: 'smooth',
      width: 3
    },

    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.05
      }
    },

    dataLabels: {
      enabled: false
    },

    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun'
      ]
    },

    tooltip: {
      y: {
        formatter: (value: number) => {
          return `Revenue : ${value}`;
        }
      }
    }
  };

  // Order Status Chart

  orderStatusChart: any = {
    series: [1240, 340, 180, 45],

    chart: {
      type: 'pie',
      height: 320
    },

    labels: [
      'Completed',
      'Processing',
      'Pending',
      'Cancelled'
    ],

    colors: [
      '#10b981',
      '#3b82f6',
      '#f59e0b',
      '#ef4444'
    ],

    legend: {
      show: false
    },

    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 250
          }
        }
      }
    ]
  };

  //Top products chart


  topProductsChart: any = {
    series: [
      {
        name: 'Sales',
        data: [1240, 980, 850, 720, 650]
      }
    ],

    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false
      }
    },

    colors: ['#6366F1'],

    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: '70%'
      }
    },

    dataLabels: {
      enabled: false
    },

    xaxis: {
      categories: [
        'Wireless Headphones',
        'Smart Watch',
        'Laptop Stand',
        'USB-C Cable',
        'Bluetooth Speaker'
      ]
    }
  };


  //pdf convert
  @ViewChild('dashboardContent', { static: false })
  dashboardContent!: ElementRef;

  downloadPdf() {
    this.isExporting = true;
    const data = this.dashboardContent.nativeElement;

    html2canvas(data, {
      scale: 2,
      useCORS: true,
      scrollY: -window.scrollY
    }).then(canvas => {

      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;

      const pdf = new jsPDF('p', 'mm', 'a4');

      let position = 0;

      pdf.addImage(
        canvas.toDataURL('image/png'),
        'PNG',
        0,
        position,
        imgWidth,
        imgHeight
      );

      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(
          canvas.toDataURL('image/png'),
          'PNG',
          0,
          position,
          imgWidth,
          imgHeight
        );
        heightLeft -= pageHeight;
      }

      pdf.save('analytics-dashboard.pdf');
      this.isExporting = false;
    }).catch(error => {
      console.error('Error generating PDF:', error);
      this.isExporting = false;
    });
  }

  onSalesPeriodChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    let categories: string[] = [];
    let data: number[] = [];
    if (value === 'Last 6 Months') {
      categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
      data = [45000, 52000, 48000, 61000, 55000, 68000];
    } else if (value === 'Last 3 Months') {
      categories = ['Apr', 'May', 'Jun'];
      data = [61000, 55000, 68000];
    } else if (value === 'Last 30 Days') {
      categories = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
      data = [12000, 15000, 18000, 23000];
    } else if (value === 'Last Year') {
      categories = ['Q1', 'Q2', 'Q3', 'Q4'];
      data = [120000, 145000, 135000, 160000];
    }
    this.salesChart = {
      ...this.salesChart,
      series: [
        {
          name: 'Revenue',
          data
        }
      ],
      xaxis: {
        ...this.salesChart.xaxis,
        categories
      }
    };
  }

  toggleChartDirection(horizontal: boolean) {
    this.isHorizontalBar = horizontal;
    this.topProductsChart = {
      ...this.topProductsChart,
      plotOptions: {
        ...this.topProductsChart.plotOptions,
        bar: {
          ...this.topProductsChart.plotOptions.bar,
          horizontal: horizontal
        }
      }
    };
  }

  updateChartThemes(isDark: boolean) {
    const mode = isDark ? 'dark' : 'light';
    this.salesChart = {
      ...this.salesChart,
      theme: { mode }
    };
    this.orderStatusChart = {
      ...this.orderStatusChart,
      theme: { mode }
    };
    this.topProductsChart = {
      ...this.topProductsChart,
      theme: { mode }
    };
  }
}
