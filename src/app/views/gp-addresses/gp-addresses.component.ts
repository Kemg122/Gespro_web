import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GpAddress } from 'src/app/models/gp-address';
import { GpAddressService } from 'src/app/services/gp-address.service';

@Component({
  selector: 'app-gp-addresses',
  templateUrl: './gp-addresses.component.html',
  styleUrls: ['./gp-addresses.component.scss'],
})
export class GpAddressesComponent implements OnInit {
  gpAddresses!: GpAddress[];
  gpAddress!: GpAddress;

  constructor(private addrService: GpAddressService, private router: Router) {}

  ngOnInit(): void {
    this.getAddresses();
  }

  getAddresses() {
    this.addrService.getAll().subscribe(
      (res) => {
        this.gpAddresses = res;
        console.log(this.gpAddresses);
      },
      (err) => {
        console.log('ERROR GET ADDRESSES....', err.error.message);
      }
    );
  }

  edit(id: any) {
    this.router.navigate(['/admin/addresses/', id]);
  }

  delete(id: any) {
    this.addrService.delete(id).subscribe((res) => {
      this.getAddresses();
    });
  }
}
