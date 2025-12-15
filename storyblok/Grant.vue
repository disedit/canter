<script setup>
defineProps({ blok: Object })
</script>

<template>
  <li v-editable="blok" class="border-b-2 py-5">
    <table>
      <tbody>
        <tr>
          <th>
            Convocatòria
          </th>
          <td>
            <a :href="blok.url" target="_blank" rel="noopener" class="underline font-bold text-md">
              {{ blok.call }}
            </a>
          </td>
        </tr>
        <tr>
          <th width="25%">
            Administració
          </th>
          <td>
            {{ blok.admin }}
          </td>
        </tr>
        <tr>
            <th>
              Beneficiaris
            </th>
            <td class="whitespace-pre-line">
              {{ blok.beneficiaries }}
            </td>
          </tr>
          <tr>
            <th>
              Import màxim ajut
            </th>
            <td class="whitespace-pre-line">
              {{ blok.import }}
            </td>
          </tr>
          <tr>
            <th>
              Període subvencionable
            </th>
            <td class="whitespace-pre-line">
              {{ blok.periode }}
            </td>
          </tr>
          <tr>
            <th>
              Data publicació
            </th>
            <td class="whitespace-pre-line">
              {{ blok.data_pub }}
            </td>
          </tr>
          <tr>
            <th>
              Data límit sol·licitut
            </th>
            <td class="whitespace-pre-line">
              {{ blok.data_pub }}
            </td>
          </tr>
          <tr>
            <th>
              Empreses que han sol·licitat assessorament
            </th>
            <td class="whitespace-pre-line">
              {{ blok.no_empreses }}
            </td>
          </tr>
          <tr>
            <th>
              Sol·licituts tramitades
            </th>
            <td class="whitespace-pre-line">
              {{ blok.tramitades }}
            </td>
          </tr>
          <tr>
            <th>
              Sol·licituts concedides
            </th>
            <td class="whitespace-pre-line">
              {{ blok.concedides }}
            </td>
          </tr>
          <tr>
            <th>
              Import total
            </th>
            <td class="whitespace-pre-line text-lg">
              {{ blok.import_total }}
            </td>
          </tr>
        </tbody>
    </table>
  </li>
</template>

<style scoped>
  table {
    tr {
      td,
      th {
        border-bottom: 1px var(--color-gray) solid;
        text-align: left;
        padding: .25rem .5rem;
        vertical-align: top;
      }

      th {
        padding-left: 0;
      }
    }

    tr:last-child {
      th,
      td {
        border-bottom: 0;
      }
    }
  }
</style>