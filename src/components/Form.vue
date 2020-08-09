<template>
  <form class="form" @submit.prevent="submitHandler">
    <h1 class="form__title">Фрома создания Клиента</h1>
    <fieldset class="form__fieldset form__fieldset--first">
      <legend class="form__legend">Персональные данные</legend>

      <div class="form__group">
        <label class="form__label">
          Фамилия
          <span class="required">*</span>
          <input
            type="text"
            class="form__input"
            v-model.trim="surname"
            :class="{invalid: ($v.surname.$dirty && !$v.surname.required)}"
            placeholder="Сидоров"
          />
        </label>
      </div>
      <small
        class="form__message"
        v-if="$v.surname.$dirty && !$v.surname.required"
      >Пожалуйста, введите фамилию</small>

      <div class="form__group">
        <label class="form__label">
          Имя
          <span class="required">*</span>
          <input
            type="text"
            class="form__input"
            v-model.trim="name"
            :class="{invalid: ($v.name.$dirty && !$v.name.required)}"
            placeholder="Семен"
          />
        </label>
      </div>
      <small
        class="form__message"
        v-if="$v.name.$dirty && !$v.name.required"
      >Пожалуйста, введите имя</small>

      <div class="form__group">
        <label class="form__label">
          Отчество
          <input
            type="text"
            class="form__input"
            v-model.trim="patronymic"
            placeholder="Викторович"
          />
        </label>
      </div>

      <div class="form__group">
        <label class="form__label">
          Дата рождения
          <span class="required">*</span>
          <input
            class="form__input form__input--date"
            type="date"
            v-model="date"
            :class="{invalid: ($v.date.$dirty && !$v.date.required)}"
          />
        </label>
      </div>
      <small
        class="form__message"
        v-if="$v.date.$dirty && !$v.date.required"
      >Пожалуйста, введите дату рождения</small>

      <div class="form__group">
        <label class="form__label">
          Номер телефона
          <span class="required">*</span>
          <input
            type="tel"
            class="form__input"
            v-model.trim="phone"
            placeholder="7xxxxxxxxxx"
            :class="{invalid: ($v.phone.$dirty && !$v.phone.required) || ($v.phone.$dirty && !$v.phone.minLength) || ($v.phone.$dirty && !$v.phone.maxLength) || ($v.phone.$dirty && !$v.phone.numeric) || (phone[0] != '7')}"
          />
        </label>
      </div>
      <small
        class="form__message"
        v-if="$v.phone.$dirty && !$v.phone.required"
      >Пожалуйста, введите номер телефона</small>
      <small
        class="form__message"
        v-else-if="(phone[0] !== '7')"
      >Номер телефона должен начинаться с цифры 7</small>
      <small
        class="form__message"
        v-else-if="($v.phone.$dirty && !$v.phone.minLength) || ($v.phone.$dirty && !$v.phone.maxLength)"
      >Номер должен состоять из {{ $v.phone.$params.minLength.min }} цифр. Сейчас он содержит {{phone.length}}</small>
      <small
        class="form__message"
        v-else-if="$v.phone.$dirty && !$v.phone.numeric"
      >Номер телефона должен состоять из цифр</small>

      <div class="form__group">
        Пол
        <label class="form__label flex flex--end">
          <input class="form__input" type="radio" name="gender" value="male" v-model="gender" />
          мужской
        </label>
        <label class="form__label flex flex--end">
          <input class="form__input" type="radio" name="gender" value="female" v-model="gender" />
          женский
        </label>
      </div>

      <div class="form__group">
        <label class="form__label">
          Группа клиентов
          <span class="required">*</span>
          <select
            class="form__input form__input--select"
            multiple
            size="3"
            v-model="groupClients"
            :class="{invalid: ($v.groupClients.$dirty && !$v.groupClients.required)}"
          >
            <option value="VIP">VIP</option>
            <option value="Проблемные">Проблемные</option>
            <option value="ОМС">ОМС</option>
          </select>
        </label>
      </div>
      <small
        class="form__message"
        v-if="$v.groupClients.$dirty && !$v.groupClients.required"
      >Пожалуйста, выберете минимум одну группу</small>

      <div class="form__group">
        <label class="form__label">
          Лечащий врач
          <select class="form__input" v-model="doctor">
            <option value selected>не выбран</option>
            <option value="Иванов">Иванов</option>
            <option value="Захаров">Захаров</option>
            <option value="Чернышева">Чернышева</option>
          </select>
        </label>
      </div>

      <div class="form__group">
        <label class="form__label flex flex--end">
          <input class="form__input" type="checkbox" checked v-model="sms" />
          Не отправлять СМС
        </label>
      </div>
    </fieldset>

    <fieldset class="form__fieldset form__fieldset--second">
      <legend class="form__legend">Адрес</legend>

      <div class="flex flex--space-betwen">
        <div class="form__group">
          <label class="form__label">
            Индекс
            <input
              type="text"
              class="form__input form__input--small"
              v-model.trim="index"
              :class="{invalid: ($v.index.$dirty && !$v.index.numeric)}"
              placeholder="622000"
            />
          </label>
        </div>
        <small
          class="form__message"
          v-if="$v.index.$dirty && !$v.index.numeric"
        >Индекс должен состоять из цифр</small>

        <div class="form__group">
          <label class="form__label">
            Страна
            <input
              type="text"
              class="form__input form__input--small"
              v-model.trim="country"
              placeholder="Россия"
            />
          </label>
        </div>
      </div>

      <div class="form__group">
        <label class="form__label">
          Область
          <input
            type="text"
            class="form__input"
            v-model.trim="region"
            placeholder="Калининградская"
          />
        </label>
      </div>

      <div class="form__group">
        <label class="form__label">
          Город
          <span class="required">*</span>
          <input
            type="text"
            class="form__input"
            v-model.trim="town"
            :class="{invalid: ($v.town.$dirty && !$v.town.required)}"
            placeholder="Калининград"
          />
        </label>
      </div>
      <small
        class="form__message"
        v-if="$v.town.$dirty && !$v.town.required"
      >Пожалуйста, введите город проживания</small>

      <div class="flex flex--space-betwen">
        <div class="form__group">
          <label class="form__label">
            Улица
            <input
              type="text"
              class="form__input form__input--small"
              v-model.trim="street"
              placeholder="Красная"
            />
          </label>
        </div>

        <div class="form__group">
          <label class="form__label">
            Дом
            <input
              type="text"
              class="form__input form__input--small"
              v-model.trim="house"
              placeholder="56"
            />
          </label>
        </div>
      </div>
    </fieldset>

    <fieldset class="form__fieldset form__fieldset--third">
      <legend class="form__legend">Паспортные данные</legend>

      <div class="form__group">
        <label class="form__label">
          Тип документа
          <span class="required">*</span>
          <select
            class="form__input"
            v-model="typeDocument"
            :class="{invalid: ($v.typeDocument.$dirty && !$v.typeDocument.required)}"
          >
            <option value selected>не выбран</option>
            <option value="Иванов">Паспорт</option>
            <option value="Захаров">Свидетельство о рождении</option>
            <option value="Чернышева">Вод. удостоверение</option>
          </select>
        </label>
      </div>
      <small
        class="form__message"
        v-if="$v.typeDocument.$dirty && !$v.typeDocument.required"
      >Пожалуйста, выберите тип документа</small>

      <div class="flex flex--space-betwen">
        <div class="form__group">
          <label class="form__label">
            Серия
            <input
              type="text"
              class="form__input form__input--small"
              v-model.trim="seriesDocument"
              placeholder="6511"
            />
          </label>
        </div>

        <div class="form__group">
          <label class="form__label">
            Номер
            <input
              type="text"
              class="form__input form__input--small"
              v-model.trim="numberDocument"
              placeholder="480999"
            />
          </label>
        </div>
      </div>

      <div class="form__group">
        <label class="form__label">
          Кем выдан
          <input
            type="text"
            class="form__input"
            v-model.trim="issuedDocument"
            placeholder="Отделом УФМС"
          />
        </label>
      </div>

      <div class="form__group">
        <label class="form__label">
          Дата выдачи
          <span class="required">*</span>
          <input
            class="form__input form__input--date"
            type="date"
            v-model="dateIssue"
            :class="{invalid: ($v.dateIssue.$dirty && !$v.dateIssue.required)}"
          />
        </label>
      </div>
      <small
        class="form__message"
        v-if="$v.dateIssue.$dirty && !$v.dateIssue.required"
      >Пожалуйста, введите дату выдачи документа</small>
    </fieldset>

    <button class="btn" type="submit">Создать Клиента</button>
  </form>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  numeric,
} from "vuelidate/lib/validators";

export default {
  name: "PersonalForm",

  data() {
    return {
      surname: "",
      name: "",
      patronymic: "",
      date: "",
      phone: "7",
      gender: "",
      groupClients: [],
      doctor: "",
      sms: true,

      index: "",
      country: "",
      region: "",
      town: "",
      street: "",
      house: "",

      typeDocument: "",
      seriesDocument: "",
      numberDocument: "",
      issuedDocument: "",
      dateIssue: "",
    };
  },

  validations: {
    surname: {
      required,
    },
    name: {
      required,
    },
    date: {
      required,
    },
    phone: {
      minLength: minLength(11),
      maxLength: maxLength(11),
      numeric,
      required,
    },
    groupClients: {
      required,
    },
    index: {
      numeric,
    },
    town: {
      required,
    },
    house: {
      numeric,
    },
    typeDocument: {
      required,
    },
    dateIssue: {
      required,
    },
  },

  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        surname: this.surname,
        name: this.name,
        patronymic: this.patronymic,
        date: this.date,
        phone: this.phone,
        gender: this.gender,
        groupClients: this.groupClients,
        doctor: this.doctor,
        sms: this.sms,

        index: this.index,
        country: this.country,
        region: this.region,
        town: this.town,
        street: this.street,
        house: this.house,

        typeDocument: this.typeDocument,
        seriesDocument: this.seriesDocument,
        numberDocument: this.numberDocument,
        issuedDocument: this.issuedDocument,
        dateIssue: this.dateIssue,
      };
      this.$emit("submit");
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.required {
  color: $required-text;
  font-size: $font-size-n;
}
</style>
