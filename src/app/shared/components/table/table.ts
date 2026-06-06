import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { TableAction, TableColumn } from '../../models/shared-table';

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table implements OnInit, OnChanges {
  @Input() title = '';
  @Input() subtitle = '';

  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];

  @Input() actions: TableAction[] = [];

  @Input() showSearch = false;
  @Input() searchPlaceholder = 'Search...';

  @Input() showFilter = false;
  @Input() filterOptions: string[] = [];

  @Input() showExport = false;
  @Input() exportText = 'Export';

  @Input() showPagination = false;
  @Input() pageSize = 8;

  currentPage = 1;
  totalPages = 1;
  pages: number[] = [];
  searchTerm = '';
  selectedFilter = 'All';

  ngOnInit() {
    this.calculatePagination();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] || changes['pageSize'] || changes['showPagination']) {
      this.calculatePagination();
    }
  }

  calculatePagination() {
    if (this.showPagination) {
      const dataLength = this.filteredData.length;
      this.totalPages = Math.ceil(dataLength / this.pageSize) || 1;
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
      if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
      }
    } else {
      this.totalPages = 1;
      this.pages = [1];
      this.currentPage = 1;
    }
  }

  get filteredData(): any[] {
    let result = this.data;

    // Apply Filter Dropdown
    if (this.showFilter && this.selectedFilter && this.selectedFilter !== 'All') {
      const filterTerm = this.selectedFilter.toLowerCase().trim();
      result = result.filter(row => {
        return this.columns.some(col => {
          const value = row[col.key];
          if (value && typeof value === 'object' && value.label) {
            return value.label.toLowerCase() === filterTerm;
          }
          return String(value).toLowerCase() === filterTerm;
        });
      });
    }

    // Apply Search Term
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase().trim();
      result = result.filter(row => {
        return this.columns.some(col => {
          const value = row[col.key];
          if (value === null || value === undefined) {
            return false;
          }
          if (typeof value === 'object' && value.label) {
            return value.label.toLowerCase().includes(term);
          }
          return String(value).toLowerCase().includes(term);
        });
      });
    }

    return result;
  }

  get paginatedData(): any[] {
    const dataToPaginate = this.filteredData;
    if (!this.showPagination) {
      return dataToPaginate;
    }
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return dataToPaginate.slice(startIndex, startIndex + this.pageSize);
  }

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value;
    this.currentPage = 1;
    this.calculatePagination();
  }

  onFilter(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.selectedFilter = select.value;
    this.currentPage = 1;
    this.calculatePagination();
  }

  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  get startIndex(): number {
    if (this.filteredData.length === 0) return 0;
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  get endIndex(): number {
    const end = this.currentPage * this.pageSize;
    const length = this.filteredData.length;
    return end > length ? length : end;
  }
}
