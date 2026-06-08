import { Component, effect } from '@angular/core';
import { analyticsCards } from '../../shared/data/analytics';
import { SharedCards } from '../../shared/models/shared-cards';
import { ThemeService } from '../../shared/theme.service';

@Component({
  selector: 'app-analytics',
  standalone: false,
  templateUrl: './analytics.html',
  styleUrl: './analytics.scss',
})
export class Analytics {
  analytics: SharedCards[] = analyticsCards;

  constructor(private themeService: ThemeService) {
    effect(() => {
      const isDark = this.themeService.isDark();
      this.updateChartThemes(isDark);
    });
  }

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

    colors: ['#6366f1'],

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
          return `Revenue : $${value.toLocaleString()}`;
        }
      }
    }
  };

  categoryChart: any = {
    series: [
      {
        name: 'Revenue',
        data: [128000, 98000, 76000, 54000, 42000, 39000]
      }
    ],

    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false
      }
    },

    colors: ['#6366f1'],

    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 6,
        barHeight: '60%'
      }
    },

    dataLabels: {
      enabled: false
    },

    xaxis: {
      categories: [
        'Electronics',
        'Fashion',
        'Home',
        'Beauty',
        'Sports',
        'Books'
      ],
      labels: {
        formatter: (val: number) => {
          return `$${(val / 1000).toFixed(0)}k`;
        }
      }
    },

    grid: {
      borderColor: 'var(--border-color)',
      strokeDashArray: 4
    },

    tooltip: {
      y: {
        formatter: (value: number) => {
          return `Revenue : $${value.toLocaleString()}`;
        }
      }
    }
  };

  trafficChart: any = {
    series: [4200, 3400, 2800, 1600],

    chart: {
      type: 'pie',
      height: 320
    },

    labels: [
      'Direct',
      'Search',
      'Social',
      'Referral'
    ],

    colors: [
      '#6366f1',
      '#10b981',
      '#f59e0b',
      '#ef4444'
    ],

    legend: {
      show: false
    },

    dataLabels: {
      enabled: true,
      formatter: (val: number, opts: any) => {
        return `${opts.w.globals.labels[opts.seriesIndex]} ${Math.round(val)}%`;
      },
      dropShadow: {
        enabled: false
      }
    },

    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 280
          }
        }
      }
    ]
  };

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

  updateChartThemes(isDark: boolean) {
    const mode = isDark ? 'dark' : 'light';
    this.salesChart = {
      ...this.salesChart,
      theme: { mode }
    };
    this.categoryChart = {
      ...this.categoryChart,
      theme: { mode }
    };
    this.trafficChart = {
      ...this.trafficChart,
      theme: { mode }
    };
  }
}
